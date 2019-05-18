import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { backgroundColor, headerColor, textColor, particleColor } from '../Constants';
import { TabEventType, TabEventCreator } from '../Action/tabAction';

const styles = () => createStyles({
    root: {
        backgroundColor: backgroundColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        /* justify-content: center; */
        fontSize: 'calc(10px + 2vmin)',
        // color: '#ffeab7',
        justifyContent: 'center',
        width: '100%',
        borderBottom: '1px solid '.concat(textColor)
    }, 
    h1: {
        // color: textColor,
        fontFamily: 'Rubik,Lato',
        fontWeight: 400,
        fontSize: 50,
        paddingTop: '15px',
    },
    h4: {
        // color: textColor,
        fontFamily: 'Rubik,Lato',
        fontWeight: 400,
        fontSize: 15,
        justifyContent: 'space-between',
        '&:hover': {
            background: particleColor,
            opacity: .8
         }
    }
});
interface WelcomeHeaderProps {
    classes: any //tslint: disable-line
    loadHeader: (type: string)=> void,
    tabConfig: any
}
const createTabButtons = (action: (type: string)=> void, css: any, tabConfig: any) => {
    return Object.keys(tabConfig).map(tab => 
        (<Button className={css.h4} onClick={() => action(tab)}>
            {tab}
        </Button>
        )    
    )
}
const WelcomeHeader = (props: any) => {
    const {classes, loadHeader, tabConfig} = props;
    if (tabConfig) {
        return (
            <div className={classes.root}>
                <div 
                    style={{display: 'flex', paddingTop: '30px',
                    paddingRight: '20px', width: '45%', justifyContent: 'space-evenly'}}
                >
                    {createTabButtons(loadHeader, classes, tabConfig)}
                </div>
            </div>
            
        );
    } else {
        return null;
    }
    
}
const mapStateToProps = (state: any, props: {}) => ({
    tabConfig: state && state.viewConfig && state.viewConfig.tabs
})
const mapDispatchToProps = ({
    loadHeader: TabEventCreator.showTab
})
const ConnectedWelcomeHeader = connect(
    mapStateToProps, mapDispatchToProps
)(WelcomeHeader);

export default withStyles(styles)(ConnectedWelcomeHeader);