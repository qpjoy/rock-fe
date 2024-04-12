// @ts-nocheck
// 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。
// 输入：
// 合法坐标为A(或者D或者W或者S) + 数字（两位以内）
// 坐标之间以;分隔。
// 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。
// 下面是一个简单的例子 如：
// A10;S20;W10;D30;X;A1A;B10A11;;A10;
// 处理过程：
// 起点（0,0）
// +   A10   =  （-10,0）
// +   S20   =  (-10,-20)
// +   W10  =  (-10,-10)
// +   D30  =  (20,-10)
// +   x    =  无效
// +   A1A   =  无效
// +   B10A11   =  无效
// +  一个空 不影响
// +   A10  =  (10,-10)
// 结果 （10， -10）
function MoveCoordinate(str: string) {
    const coordinates = str.split(';');
    const coordinateReg = /^([WSAD])([0-9]{1,2})$/;
    const movedCoordinate = coordinates.reduce((acc: string, cur: number[]) => {
        const matched = cur.match(coordinateReg);
        const direction = matched?.[1];
        const distance = Number(matched?.[2]);
        console.log(`[D D]: `, direction, distance)
        if(!direction || !distance) {
            return acc;
        }
        let [x, y] = acc;
        console.log(`[Coordinates acc]: `, x, y, typeof distance);
        if(direction === 'W') {
            y += distance;
        }else if(direction === 'S') {
            y -= distance;
        }else if(direction === 'A') {
            x -= distance;
        }else if(direction === 'D') {
            x += distance;
        }
        console.log(`[Coordinates x&y]: [${x}, ${y}] `);
        return [x, y]
    }, [0, 0]);

    return movedCoordinate;
}

const coors = MoveCoordinate('A10;S20;W10;D30;X;A1A;B10A11;;A10;');
console.log(`[Coors]: `, coors)