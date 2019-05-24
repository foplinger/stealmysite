import React from 'react';
import { connect } from 'react-redux';
import { Typography,createStyles, withStyles} from "@material-ui/core";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
const styles = () => createStyles({
    root: {
        marginTop: '15px',
        width: '100%'
    },
    tabs: {
        
        width: '100%'
    },
    selected: {

    }
})
interface InnerTabProps {
    classes: any;
}
interface InnerTabState {
    currentTab: number
}
class InnerTab extends React.Component<InnerTabProps, InnerTabState> {
    
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, newValue) {
        this.setState({currentTab: newValue})
    }
    getButtons = () => {
        
    }
    render() {
        const { classes } = this.props;
        return (
            
            <div className={classes.root}>
                
                
            </div>
        );
    }
}

export default withStyles(styles)(InnerTab);