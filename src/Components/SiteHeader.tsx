import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { backgroundColor, headerColor, textColor, particleColor } from '../Constants';

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
}
const WelcomeHeader = (props: WelcomeHeaderProps) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <div 
                style={{display: 'flex', paddingTop: '30px',
                paddingRight: '20px', width: '45%', justifyContent: 'space-evenly'}}
            >
                <Button className={classes.h4}>
                    Resume
                </Button>

                <Button className={classes.h4}>
                    Projects
                </Button>
                
                <Button className={classes.h4}>
                    About me
                </Button>
            </div>
        </div>
        
    );
}

export default withStyles(styles)(WelcomeHeader);