import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { createStyles, withStyles } from "@material-ui/core";
import { particleColor } from '../../Constants';

import getTabContent from '../../FieldFactory';

const getTabHeader = (tabConfig, currentSubTab, openMainTab) => {
    
    if(openMainTab && tabConfig && tabConfig[openMainTab]) {
        const mainTabConfig = tabConfig[openMainTab];
        
        if(currentSubTab && mainTabConfig[currentSubTab] && !mainTabConfig[currentSubTab].innerTabs) {
            return (
                <div style={{width: '', height: '10%', backgroundColor: particleColor, marginTop: '50px'}}/>
            );
        }
        
    }
    
}
const styles = () => createStyles({
    root: {
        
        width: '100%',
        height: '100%',
        
    },
    
})
interface TabPaneProps {
    index: number,
    currentSubTab: string,
    tabConfig: any,
    openMainTab: string,
    classes: any
}

class TabPane extends React.Component<TabPaneProps, {}> {

    render() {
        const { index, currentSubTab, tabConfig, openMainTab, classes } = this.props;

        if (tabConfig && currentSubTab) {
            return (
            
                <TabPanel className={classes.root} tabId={"vertical-tab-".concat(index.toString())}>
                    {getTabHeader(tabConfig, currentSubTab, openMainTab)}
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
export default withStyles(styles)(ConnectedTabPane);