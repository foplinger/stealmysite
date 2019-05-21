import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import getTabContent from '../../FieldFactory';

interface TabPaneProps {
    index: number,
    currentSubTab: string,
    tabConfig: any,
    openMainTab: string
}

const getTabPanelContent = (tabConfig) => {

}
class TabPane extends React.Component<TabPaneProps, {}> {

    render() {
        const { index, currentSubTab, tabConfig, openMainTab } = this.props;

        if (tabConfig && currentSubTab) {
            return (
            
                <TabPanel tabId={"vertical-tab-".concat(index.toString())}>
                    {getTabContent(tabConfig[openMainTab], currentSubTab)}
                </TabPanel>
                
            );
        }
        return null;
    }

}

const mapStateToProps = (state: any, props: {}) => ({
    tabConfig: state && state.viewConfig && state.viewConfig.tabs
})
const mapDispatchToProps = ({
})

const ConnectedTabPane = connect(mapStateToProps, mapDispatchToProps)(TabPane);
export default ConnectedTabPane;