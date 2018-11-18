export interface IBirdState {
    birdName: string;
}


export const birdInitState = {
    birdName: 'Eagle'
};


export function birdReducer(state = birdInitState, action) {
    return { ...state };
}
