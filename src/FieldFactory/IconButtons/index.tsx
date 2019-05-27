import React, { Component } from 'react';
import { Typography, Tabs, Tab, IconButton, SvgIcon } from "@material-ui/core";

const handlePageChange = (newUrl) => {
    window.location = newUrl;
}

const handleSendEmail = (emailAddress) => {
    window.open('mailto:'.concat(emailAddress));
}

const handleDownload = (location) => {
    let a = document.createElement('a')
    a.href = location
    a.download = location.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export const generateIconButtons = (css:any, buttonConfig: any) => {
    return Object.keys(buttonConfig).map((button:any) => {
        if (buttonConfig[button].type === 'link') {
            return (<IconButton className={css.hover} onClick={() => handlePageChange(buttonConfig[button].link)}>
                <SvgIcon  className={css.icon}>
                    <path d={buttonConfig[button].path} />
                </SvgIcon>
            </IconButton>);
        } else if (buttonConfig[button].type === 'email') {
            return (<IconButton className={css.hover} onClick={() => handleSendEmail(buttonConfig[button].email)}>
                <SvgIcon  className={css.icon}>
                    <path d={buttonConfig[button].path} />
                </SvgIcon>
            </IconButton>);
        } else if  (buttonConfig[button].type === 'download') {
            return (<IconButton className={css.hover} onClick={() => handleDownload(buttonConfig[button].location)}>
                <SvgIcon  className={css.icon}>
                    <path d={buttonConfig[button].path} />
                </SvgIcon>
            </IconButton>);
        }
    }
        
    )
}

