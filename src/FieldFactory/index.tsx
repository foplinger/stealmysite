import React, { Component } from 'react';
import { Typography, Tabs, Tab } from "@material-ui/core";
import InnerTab from '../Components/Tabs/InnerTab';

const splitCharacter = "-";
const bulletCharacter = "b";
const imgCharacter = "img";

const getTabContent = (tabConfig, currentSubTab) => {
    if(tabConfig && tabConfig[currentSubTab] && tabConfig[currentSubTab].innerTabs) {
        return getTabContentWithInnerTabs(tabConfig, currentSubTab);
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

const getTabContentWithInnerTabs = (tabConfig, currentSubTab) => {
    

    return (
        <InnerTab /> 
    )
    
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