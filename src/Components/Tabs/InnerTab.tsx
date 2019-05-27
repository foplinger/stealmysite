import React from 'react';
import { connect } from 'react-redux';
import { Typography,createStyles, withStyles, Button } from "@material-ui/core";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { getTabContentWithoutInnerTabs } from '../../FieldFactory';
import { particleColor, textColor, cardColor, iconColor, backgroundColor } from '../../Constants';

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
        backgroundColor: backgroundColor,
        width: '100%',
        borderBottom: '1px solid '.concat(particleColor),
        display: 'flex',
        justifyContent: 'space-evenly',
        
        alignItems: 'center'
    },
    btn : {
       
        backgroundColor: backgroundColor,
        fontSize: '15px',
            
        minWidth: '25%',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
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
                        <div style={button === this.state.currentTab ? { borderRadius: '5px 5px 0px 0px',border: '1px solid '.concat(particleColor), borderBottom: '1px solid '.concat(backgroundColor)} : {}}>
                            <Button className={this.props && this.props.classes && this.props.classes.btn} onClick={() => this.handleChange(button)}>
                                {button} 
                            </Button>
                        </div>
                        );
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