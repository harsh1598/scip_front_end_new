import { FORM_LAYOUT_HEADING } from "../CommonAction/CommonAction";

export interface UserState {
    loading?: boolean,
    error?: string,
    loginSuccess?: false,
    userInfo: {}
}

interface Action {
    type: string,
    payload?: object
}


export interface addFormLayoutHeading {
    tabName: string;
}

export const getFormLayoutHeading = (
    state: addFormLayoutHeading = { tabName: '' },
    action: Action
) => {
    console.log("t",action);
    
    switch (action.type) {
        case FORM_LAYOUT_HEADING:
            return { tabName: action.payload };
        default:
            return state;
    }
};

