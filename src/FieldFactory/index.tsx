import React, { Component } from 'react';
import { Typography } from "@material-ui/core";

const splitCharacter = "-";
const bulletCharacter = "b";
const imgCharacter = "img";

const getTabContent = (tabConfig, currentSubTab) => {
    if(tabConfig && tabConfig.innerTabs) {
        //Do inner tabs
    } else {
        return getTabContentWithoutInnerTabs(tabConfig, currentSubTab);
    }
}

const generateTabBody = (content) => {
    if (content) {
        return Object.keys(content).map(snippet => {
            if (snippet.split(splitCharacter)[0] === bulletCharacter) {
                return <li>{content[snippet]}</li>
            }
        })
    }
    return null;
}

const getTabContentWithoutInnerTabs = (tabConfig, currentSubTab) => {

    return (
        <div style={{marginTop: '30px'}}>
            <Typography variant="h6" gutterBottom>
                {tabConfig && tabConfig[currentSubTab] && tabConfig[currentSubTab].title}
            </Typography>
            <ul>
                {generateTabBody(tabConfig[currentSubTab].content)}
            </ul>
            
        </div>
        
    )
}


export default getTabContent;