export const CHANGE_SCREEN = "CHANGE_SCREEN";
export type CHANGE_SCREEN = typeof CHANGE_SCREEN;

interface changeScreenAction {
    type: CHANGE_SCREEN;
    screen_name: string;
}

export const changeScreen = ({screen_name}):changeScreenAction => {
    return {
        type: CHANGE_SCREEN,
        screen_name,
    }
}


export const SCREEN_ACTIONS = CHANGE_SCREEN;