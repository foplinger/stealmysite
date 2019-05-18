import { LoadConfigEventType, LoadConfigActionCreator } from '../Action/loadConfigEvent';
import { TabEventType, TabEventCreator } from '../Action/tabAction';

export default function viewConfigReducer(state = {}, action: ReturnType<typeof LoadConfigActionCreator.loadConfig> ) { 
    switch(action.type) {
        case LoadConfigEventType.configLoad:
            return {
                ...state,
                ...(<ReturnType<typeof LoadConfigActionCreator.loadConfig>> action.config)
            }
        default: 
            return state;
    }
}