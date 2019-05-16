import React from 'react';
import {connect} from 'react-redux';
import EmailIcon from '@material-ui/icons/Email';
import { createStyles, withStyles, IconButton, Icon, Typography, SvgIcon } from '@material-ui/core';
import { backgroundColor, cardColor, textColor, particleColor } from '../Constants';

const styles = () => createStyles({
    root: {
        // backgroundColor: backgroundColor,
        minWidth: '100%',
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        borderRadius: '50%',
        height: '240px',
        width: '180px',
        border: '3px solid '.concat(textColor)
    },
    card: {
        display: 'flex',
        backgroundColor: backgroundColor
    },
    text: {
        color: textColor,
        marginBottom: '10px',
        borderBottom: '1px solid '.concat(particleColor)
    },
    subtext: {
        color: textColor,
        marginLeft: '20px'
    },
    info: {
        paddingLeft: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    smallIcon : {
        width: '75px',
        height: '60px',
        fontSize: 'large',
    },
    icon : {
        width: '70px',
        height: '60px',
        fontSize: 'large',
    },
    hover : {
        '&:hover': {
            background: particleColor,
            opacity: .8
         }
    }

})

const generateIconButtons = (css:any, buttonConfig: any) => {
    return Object.keys(buttonConfig).map((button:any) => 
        <IconButton className={css.hover}>
            <SvgIcon  className={css.icon}>
                <path d={buttonConfig[button].path} />
            </SvgIcon>
        </IconButton>
    )
}

const Profile = (props: any) => {
    const { classes, profileConfig } = props;
    if (profileConfig) {
        return (
            <div className={classes.root}>
                    <div className={classes.card}> 
                        <img
                            src={profileConfig && profileConfig.img && profileConfig.img.path}
                            className={classes.img}
                        />
                        <div className={classes.info}>
                            <Typography component="h2" variant="h1" gutterBottom className={classes.text}>
                               {profileConfig && profileConfig.name && profileConfig.name.value}
                            </Typography>
                            <Typography component="h6" variant="subtitle1" gutterBottom className={classes.subtext}>
                                {profileConfig && profileConfig.subtitle && profileConfig.subtitle.value}
                            </Typography>
                            <div>
                                {generateIconButtons(classes, profileConfig.icons)}
                            </div>
                        </div>
                    </div>
                
            </div>);
    } else {
        return null;
    }
};

const mapStateToProps = (state: any,props: {}) => ({
    profileConfig: state && state.viewConfig && state.viewConfig.profile
});

const ConnectedProfile = connect(
    mapStateToProps, null
)(Profile);

export default withStyles(styles)(ConnectedProfile);