// Импорт экшена
import { SEND_MESSAGE } from "../Actions/message";

const initialState = {
    messages: []
};

export const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return { ...state, messages: state.messages.concat(action.payload) }
        default: return state
    }
};