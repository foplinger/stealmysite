const TabEventType = {
    showTab: 'SHOW_TAB'
}

const TabEventCreator = {
    showTab: tabType => ({
        type: TabEventType.showTab,
        tabType
    })
}

export {
    TabEventCreator,
    TabEventType
}