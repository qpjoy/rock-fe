# Avatar - Playerhub
列奥纳多·达·芬奇（Leonardo da Vinci）是意大利文艺复兴时期的一名全栈发明家，他所具备的强烈好奇心、学习动力及执行力，与我们所倡导的全球玩家共同创造虚拟世界是非常契合的。我们的目标就是发掘和鼓励普通人心中的创造力，并赋予他们将其实现能力。


## 环境
| 环境 | 国内 | 国外 |
| -- | -- | -- |
|  alpha | alpha | world-test |
|  beta | beta | world-beta |
|  master | prod | world |
| 开发 | dev \ skip\ approval  |
| 版署测试 | approval |
| 版署 | approval-prod |

### 强制弹窗
- 首页：默认相册 > 签到
- 游戏详情： 点击开始游戏 -> 年龄&性别

## 项目结构
#### 常量解析
| 常量                 | 功能                      | 文档地址                                            |
| -------------------- | ------------------------- | --------------------------------------------------- |
| GA(Google Analytics) | 谷歌页面分析埋点          | https://developers.google.cn/analytics              |
| Sentry               | 本地搭建的埋点平台        | http://davinci-sentry.lilithgames.com/organizations/sentry/issues/?project=5                             |
| Apollo               | GraphQL 数据查询          | https://davinci-backend-dev.lilithgames.com/play                 |
| QS                   | 页面路由参数              | window.location.search                              |
| QT                   | 跨平台开发框架            | https://www.qt.io/                                  |
| QWebChannel          | QT 提供的同客户端通信插件 | https://doc.qt.io/qt-5/qtwebchannel-javascript.html |
| NOTCH_xxx            | 刘海屏坐标                |                                                     |

#### 页面结构
```html
<index> //项目主入口，执行初始化任务
    <App>
        <CommonProvider  client={client} QS={QS} notch={notch} qtoken={qtoken}>
        	<ApolloProvider client={_client}>
                <IntlProvider locale={state.locale} messages={i18n[state.locale]}>
                  <Notification />
                  <Modal {...state.globalModal} />
                    <Router>
                        <LayoutBox>
                        	`````
                            <LayoutPlayerhub>
                            	```````
                                <HomeGame>
                                	<GameList />
                                    ```````
                                </HomeGame>
                            </LayoutPlayerhub>
                        </LayoutBox>
                    </Router>
                </IntlProvider>
             </ApolloProvider>
        </CommonProvider>
    </App>
</index> 

```
| Components | Description |
| -- | -- |
| index | 项目主入口，执行初始化任务<br />eruda、Sentry、GA |
| App | 初始化配置Apollo<br />初始化跨平台模式 |
| CommonProvider | 基本信息、选择语言、数据请求拦截器、挂载提示框、监听Unity引擎端事件、提示全局状态 |
| [ApolloProvider](https://www.apollographql.com/docs/react/get-started/) | 数据请求提供方 |
| [IntlProvider](https://formatjs.io/docs/getting-started/installation/) | 国际化组件，提供多语言支持 |
| LayoutBox | 监听Unity引擎端路由类事件 |
| LayoutPlayerhub | 监听Unity加入队伍、换装，轮训获取用户列表，引入 tConsole 、TeamChat 模块 |
| HomeGame |  |
| GameList |  |

1. 全局数据挂载在 CommonProvider 上

| 数据名 | 介绍 |
| -- | -- |
| client | 网络请求参数：api地址、用户令牌、客户端平台 |
| QS | 路由参数 |
| notch | 刘海屏遮罩坐标 |
| qtoken | 从编辑器侧获取到的 QToken |

2. mode

| 数据名 | 介绍 |
| -- | -- |
| WEB |  |
| HUB |  |
| EDITOR |  |

3. platform

| 数据名 | 介绍 |
| -- | -- |
| web |  |
| playerhub |  |
| editor |  |

4. 数据请求 API

| 数据名 | 介绍 |
| -- | -- |
| client._query | 数据请求方法 |
| client._mutation | 数据操作方法 |

***
## 项目架构
1. 基础环境配置、打包环境配置
2. 项目基础架构
3. 项目依赖 DLL 的必要性
4. 静态文件的压缩、图片压缩、开启 gzip
5. 缓存配置
6. 后门（漏洞）

## 常用组件
| component | src | description | 
| -- | -- | -- |
| LazyLoad | node_modules | 滚动懒加载 |
| ImgLayout | @/components/Community/ImgLayout | 图片组合块 |

## 全局基本样式
| 样式名 | 样式类 |
| -- | -- |
| 骨架背景 |.skeleton-loading |
| 居中图片块 | .imageBox |
| 指针 | . icon-arrow/.icon-arrow-grey/.icon-arrow-black |
| 箭头 | .icon-direct/.icon-direct-grey |
| 方向 | .icon-top/.icon-right/.icon-down/.icon-left|

#### webpack配置
1. 图片压缩
> [某张背景图](https://tsh-avatar-frontend-prod.oss-cn-shanghai.aliyuncs.com/playhub/static/media/usercard-bg.d5c14d73.png)
> - Size: 425k
> - compress: 67k
> - gzip: 21k

2. 插件依赖
- [customize-cra](https://github.com/arackaf/customize-cra#readme)
- [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md): 可以添加各类性能监控插件

3. 打包分析
> const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
> addWebpackPlugin(new BundleAnalyzerPlugin())
- eruda 821k
- vconsole 130k

#### 用户卡片
```
const { toggleUserCard, global_usercard } = useContext(CommonContext);
toggleUserCard({show: true, userData}) // Open
toggleUserCard({show: false, {}}) // Close

```


#### 本地化翻译文件获取
- 获取[本地化平台](http://lilac.lilith.com/langPack)数据：
```javascript
var request = window.indexedDB.open("LiLAC-Avatar"),
    db,
    dataJSON = {};
/***
 * db {Object} 已连接的数据库实例
 * languageKey {String} 导出语言的key，空为整体对象集
*/
function getData(db, languageKey){
    db.transaction('locUnits').objectStore('locUnits').openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var key = cursor.value.locKey ;
            if(/印尼语本地化 - 前端资源（不包括新功能）/.test(cursor.value.info['文件'])){
                dataJSON[key] = languageKey ? cursor.value.localizations[languageKey] : cursor.value.localizations;
            }
            cursor.continue();
        } else {
            console.log('没有更多数据了！');
            console.log(dataJSON)
        }
    };
}

request.onsuccess = function(e) {
    console.log("Success!");
    db = e.target.result;
    getData(db,'zh_CN')  // ***** languageKey
}

```
通过“右键”-“copy object”导出到json文件

## src 文件目录分布

|-- apollo                        apollo相关文件
|   |-- apollo-set-server.tsx
|   `-- graphql
|       `-- gql.tsx
|-- assets                        静态资源文件
|   `-- images
|       |-- logo.png
|       `-- logo_dev.png
|-- common.scss                   公共css文件，包括样式重置，部分公共封装
|-- components                    组件文件夹
|   |-- InputBox                  组件命名必须要求大写开头，驼峰命名法
|   |   |-- index.scss            组件scss
|   |   `-- index.tsx
|   |-- LayoutBox
|   |   |-- index.scss
|   |   `-- index.tsx
|   |-- RouterBox
|   |   `-- index.tsx
|   |-- ScrollToLoad
|   |   |-- index.scss
|   |   `-- index.tsx
|   `-- SuspenseBox
|       `-- index.tsx
|-- global.scss                   定义css全局的变量
|-- i18n                        
|   |-- en_US
|   |-- index.ts
|   `-- zh_CN
|       |-- index.json
|       `-- page.json
|-- index.tsx                     入口文件夹
|-- pages                         页面文件夹
|   |-- list                      页面名跟路由保持一致，小写开头
|   |   |-- index.scss
|   |   `-- index.tsx
|   `-- login
|       |-- index.scss
|       `-- index.tsx
|-- react-app-env.d.ts
|-- router.tsx                    路由相关，以及全局数据的传递
|-- serviceWorker.ts
|-- setupTests.ts
|-- state                         数据状态管理
|   |-- APP_STATE.tsx           
|   |-- common.tsx                全局公用数据管理，类似之前的platformContext
|   `-- home.tsx                  页面所用到的数据状态管理
|-- sw.js
|-- types
|   `-- index.d.ts
`-- utils                         复用函数文件夹
    |-- devicer.ts
    |-- geQuery.ts
    |-- index.tsx
    `-- lib
        |-- qt.js
        `-- unity.tsx
