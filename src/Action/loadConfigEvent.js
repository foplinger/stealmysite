const LoadConfigEventType = {
    configLoad: 'VIEW-CONFIG-LOAD'
}

const LoadConfigActionCreator = {
    loadConfig: config => ({
        type: LoadConfigEventType.configLoad,
        config
    })
}

export {
    LoadConfigActionCreator,
    LoadConfigEventType
}