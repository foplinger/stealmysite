import { TabEventType, TabEventCreator } from '../Action/tabAction';

const initialState = {
    openTab: "clear"
}
export default function tabReducer(state = initialState, action: ReturnType<typeof TabEventCreator.showTab>) { 
    switch(action.type) {
        case TabEventType.showTab:
            return {
                ...state,
                openTab: action.tabType
            }
        default: 
            return state;
    }
}