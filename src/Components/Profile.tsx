import React from 'react';
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

const Profile = (props: any) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
                <div className={classes.card}> 
                    <img
                        src={'Frank.jpg'}
                        className={classes.img}
                    />
                    <div className={classes.info}>
                        <Typography component="h2" variant="h1" gutterBottom className={classes.text}>
                            Frank Oplinger
                        </Typography>
                        <Typography component="h6" variant="subtitle1" gutterBottom className={classes.subtext}>
                            Software Engineer ... put something else here
                        </Typography>
                        <div>
                            <IconButton className={classes.hover}>
                                <EmailIcon className={classes.smallIcon} />
                            </IconButton>

                            <IconButton className={classes.hover}>
                                <SvgIcon  className={classes.icon}>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </SvgIcon>
                            </IconButton>

                            <IconButton className={classes.hover}>
                                <SvgIcon  className={classes.icon}>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </SvgIcon>
                            </IconButton>

                            <IconButton className={classes.hover}>
                                <SvgIcon  className={classes.smallIcon}>
                                    <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14M12,19L17,14H14V10H10V14H7L12,19Z" />
                                </SvgIcon>
                            </IconButton>
                        </div>
                    </div>
                </div>
            
        </div>
    )
};

export default withStyles(styles)(Profile);