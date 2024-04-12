function Fetch() {}
Fetch.prototype.request = () => {};
Fetch.prototype.cancel = () => {};

class Foo {
  // 模拟100个请求地址
  urlList = new Array(100).fill("url").map((url, index) => url + index);

  async request(url) {
    const fetch = new Fetch(url);
    const cancel = () => fetch.cancel();
    return new Promise(async (res, rej) => {
      fetch
        .request()
        .then((fetched) => {
          res({
            id: url,
            data: fetched,
            cancel,
          });
        })
        .catch((e) => {
          rej({
            id: url,
            error: e,
            cancel,
          });
        });
    });
  }

  // 请求链，如果上一个没有resolve，返回下一个url的request
  chainRequest(req, nextUrl) {
    return req
      .then((raceRes) => {
        // 请求完成，返回结果
        // this.resolved = true;
        return {
          success: true,
          ...raceRes,
        };
      })
      .catch((raceErr) => {
        let nextRequest;
        if (!nextUrl) {
          // 如果没有传入下一个url，那么从urlList中第一个自动消费。
          const nextRequestUrl = this.urlList.shift();
          // 如果没有url可消费了, next null
          if (!nextRequestUrl) {
            return {
              success: false,
              next: null,
              ...raceErr,
            };
          }
          nextRequest = this.request(nextRequestUrl);
        } else {
          // 手动指定下一个url
          nextRequest = this.request(nextUrl);
        }
        return {
          success: false,
          next: nextRequest,
          ...raceErr,
        };
      });
  }

  tunnel({ requestedHistory }) {
    // 建立第一个请求，先从urlList取出第一个url，并且从100个地址中移除
    const tunelFirst = this.urlList.splice(0, 1);
    const currentRequest = this.request(tunelFirst);
    // 开启通道，链式调用request
    let tunnel = this.chainRequest(currentRequest);
    // 通道访问过的请求
    requestedHistory = [tunnel];

    // 当Tunnel没有resolved的时候，消费next
    do {
      tunnel = this.chainRequest(tunnel.next);
      requestedHistory.push(tunnel);
      // 只要T的通道有next的链，就继续执行
    } while (tunnel.next);

    // tunnel成功后关闭, 返回所有执行过的request
    return requestedHistory;
  }

  main() {
    // 正在处理中的tunnel在执行循环，无法返回requestedTunnel, 所以从外部传入
    const requestedHistory1 = [];
    const requestedHistory2 = [];
    const requestedHistory3 = [];
    // 开启T1-3通道，urlList线程安全
    const T1 = this.tunnel(requestedHistory1);
    const T2 = this.tunnel(requestedHistory2);
    const T3 = this.tunnel(requestedHistory3);

    // 只要3通道中有一个success，终止通道中正在执行的
    if (T1.success || T2.success || T3.success) {
      const lastT1 = requestedHistory1.length
        ? requestedHistory1[requestedHistory1.length - 1]
        : [];
      const lastT2 = requestedHistory2.length
        ? requestedHistory2[requestedHistory2.length - 1]
        : [];
      const lastT3 = requestedHistory3.length
        ? requestedHistory3[requestedHistory3.length - 1]
        : [];
      const toClear = [].concat(lastT1).concat(lastT2).concat(lastT3);
      toClear.forEach((tunnel) => {
        tunnel.cancel();
      });
    }
  }
}

new Foo().main();
