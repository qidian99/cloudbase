module.exports = {
    // 此处填入你的真实环境 ID
    envId: "ENV_ID_REPLACED_BY_GIT_HOOK",
    functionRoot: "./functions",
    functions: [
        {
            name: "addNumbers",
            // 超时时间
            timeout: 5,
            // 环境变量
            envVariables: {},
            runtime: "Nodejs10.15",
            // 内存 128
            memorySize: 128,
            handler: "index.main"
        }
    ]
};
