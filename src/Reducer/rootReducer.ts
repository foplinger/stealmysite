import { LoadConfigEventType, LoadConfigActionCreator } from '../Action/loadConfigEvent';

export default function rootReducer(state = {}, action: ReturnType<typeof LoadConfigActionCreator.loadConfig>) { 
    switch(action.type) {
        case LoadConfigEventType.configLoad: 
        console.log(action.config);
        return {
            ...state,
            viewConfig: action.config
        }
        default: 
            return state;
    }
}