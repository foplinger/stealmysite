import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { createStyles, withStyles, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { textColor, iconColor } from '../../Constants'
import 'react-web-tabs/dist/react-web-tabs.css';
import { TabEventCreator } from '../../Action/tabAction';
import TabPane from './TabPane';

const getRootStyle = (currentTab) => createStyles({
    root: {
        width: '80%',
        height: 'auto',
        minHeight: '500px',
        marginBottom: '200px',
        backgroundColor: iconColor,
        clear:"both",
        display: currentTab == "clear" ? 'none' : 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }
});
interface TabWindowProps {
    classes: {
        root: any
    },
    currentTab: string,
    hideTab: () => void,
    tabs: any
}
interface TabWindowState {
    myRef: any
}

const getTabs = (currentTab, tabs) => {
    let i = 0;
    if(tabs[currentTab]) {
        return Object.keys(tabs[currentTab]).map(tab => {
            i++;
            return <Tab tabFor={"vertical-tab-".concat(i.toString())}>{tab}</Tab>
        })
    } else {
        return null;
    }
    
}
const getTabPanes = (currentTab, tabs) => {
    let i = 0;
    if(tabs[currentTab]) {
        return Object.keys(tabs[currentTab]).map(tab => {
            i++;
            return <TabPane openMainTab={currentTab} index={i} currentSubTab={tab}/>
        })
    } else {
        return null;
    }
}
class TabWindow extends React.Component<TabWindowProps, TabWindowState> {
    private myRef;
    private scrolledOnce = true;
    constructor(props: TabWindowProps) {
        super(props)
        this.myRef = React.createRef()   // Create a ref object 
    }
    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
    render() {

        const {currentTab, tabs} = this.props;

        if (tabs) {
            return (
                <div style={getRootStyle(currentTab).root} ref={this.myRef}>
                    <Tabs defaultTab="vertical-tab-1" vertical>
                        <TabList>
                            {getTabs(currentTab, tabs)}
                        </TabList>
                       
                        {getTabPanes(currentTab, tabs)}
                    </Tabs>
                    <IconButton onClick={() => this.props.hideTab()}>
                        <CloseIcon />
                    </IconButton>
                </div>
                
              );
        } else {
            return null;
        }
        
    }
}

const mapStateToProps = (state: any, props: any) => ({
    currentTab: state && state.tab && state.tab.openTab,
    tabs: state && state.viewConfig && state.viewConfig.tabs
});

const mapDispatchToProps = ({
    hideTab: TabEventCreator.hideTab
});

const ConnectedTabWindow = connect(mapStateToProps, mapDispatchToProps)(TabWindow);

export default ConnectedTabWindow;