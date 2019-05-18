import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { createStyles, withStyles } from '@material-ui/core';
import 'react-web-tabs/dist/react-web-tabs.css';
import { AnyRecordWithTtl } from 'dns';
const styles = () => createStyles({
    root: {
        // backgroundColor: backgroundColor,
        minWidth: '100%',
        minHeight: '100%',
        marginLeft: '15%'
    }
});
interface TabPaneProps {
    classes: {
        root: any
    }
}
class TabPane extends React.Component<TabPaneProps, {}> {

    render() {
        return (
            <div className={this.props.classes.root}>
                <Tabs defaultTab="vertical-tab-one" vertical>
                    <TabList>
                        <Tab tabFor="vertical-tab-one">Tab 1</Tab>
                        <Tab tabFor="vertical-tab-two">Tab 2</Tab>
                        <Tab tabFor="vertical-tab-three">Tab 3</Tab>
                    </TabList>
                    <TabPanel tabId="vertical-tab-one">
                        <p>Tab 1 content</p>
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
                        <p>Tab 2 content</p>
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-three">
                        <p>Tab 3 content</p>
                    </TabPanel>
                </Tabs>
            </div>
            
          );
    }
}

const mapStateToProps = (state: any, props: any) => ({

});

const mapDispatchToProps = ({});

const ConnectedTabPane = connect(mapStateToProps, mapDispatchToProps)(TabPane);

export default withStyles(styles)(ConnectedTabPane);