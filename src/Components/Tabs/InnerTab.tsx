import React from 'react';
import { connect } from 'react-redux';
import { Typography,createStyles, withStyles, Button } from "@material-ui/core";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { getTabContentWithoutInnerTabs } from '../../FieldFactory';
import { particleColor } from '../../Constants';

const styles = () => createStyles({
    root: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: particleColor,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '10%'
    }
})
interface InnerTabProps {
    classes: any;
    getButtons: any;
    tabConfig: any;
}
interface InnerTabState {
    currentTab: string
}
class InnerTab extends React.Component<InnerTabProps, InnerTabState> {
    
    constructor(props) {
        super(props);
        this.state = {
            currentTab: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(newValue) {
        this.setState({currentTab: newValue})
    }
    getButtons = (config) => {
        if(config) {
            
            return Object.keys(config).map(button => {
                
                if(button !== 'innerTabs'){
    
                    return(
                        <Button onClick={() => this.handleChange(button)}>
                            {button}
                        </Button>);
                } 
            });
        }
        return null;
        
    }
    getTabContent = (currentTab, tabConfig) => {
        if(tabConfig[currentTab]) {
            return getTabContentWithoutInnerTabs(tabConfig[currentTab]);
        }
        return null;

    }
    componentDidMount = () => {
        if(this.props.tabConfig) {
            this.handleChange(Object.keys(this.props.tabConfig)[1]);
        }
    }
    render() {
        const { classes, getButtons, tabConfig } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.buttonContainer}>
                    {this.getButtons(tabConfig)}
                </div>
                
                {this.getTabContent(this.state.currentTab, tabConfig)}
            </div>
        );
    }
}


const ConnectedInnerTab = connect(
    null, null
)(InnerTab);

export default withStyles(styles)(ConnectedInnerTab);