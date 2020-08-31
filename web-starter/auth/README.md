# 登录与用户快速开始

## 准备工作
1. [拥有腾讯云账号](https://docs.cloudbase.net/quick-start/create-env.html)
2. **务必**[创建云开发环境](https://docs.cloudbase.net/quick-start/create-env.html)，获得 **环境 ID**
3. 安装 [Node.js](https://nodejs.org/en/)
4. 安装 [Cloudbase CLI](https://docs.cloudbase.net/quick-start/install-cli.html)

```sh
npm install -g @cloudbase/cli
```

## 第 1 步：注入环境 ID

打开源码目录下的 `cloudbaserc.js` 文件，并填入你的 `envId`

```js
module.exports = {
    // 此处填入你的真实环境 ID
    envId: "your-env-id",

    ...
};
```

打开源码目录下的 `static/main.js` 文件，并填入你的 `envId`

```js
// 此处填入你的真实环境 ID
var envId = 'your-env-id'

...
```

打开源码目录下的 `functions/generateTicket/index.js` 文件，并填入你的 `envId`

```js
// 此处填入你的真实环境 ID
var envId = 'your-env-id'

...
```

## 第 2 步：初始化 CLI

```sh
## 进入源码根目录
cd auth

## CLI 授权
cloudbase login
```

## 第 3 步：开启匿名登录

```sh
## 开启匿名登录
cloudbase env:login:create
```

## 第 4 步：下载自定义登录密钥

前往[登录授权](https://console.cloud.tencent.com/tcb/env/login)页面，进行自定义登录的**私钥下载**，并替换掉源码目录下的 `functions/generateTicket/tcb_custom_login_key.json`

## 第 5 步：部署云函数

```sh
## 部署云函数
cloudbase functions:deploy

## 开通云函数的 HTTP 调用
cloudbase service:create -p /generateTicket -f generateTicket
```

## 第 6 步：部署静态网站

* [开通静态网站托管](https://console.cloud.tencent.com/tcb/hosting)
* 部署静态网站

```sh
## 部署静态网站
cloudbase hosting:deploy ./static ./auth
```

## 第 7 步：访问网站

使用 envId.tcloudbaseapp.com/auth 访问你的网站（envId 应该是你的真实环境 ID）
