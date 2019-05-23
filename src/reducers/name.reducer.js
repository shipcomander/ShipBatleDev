import { ACTION_NAME } from "../hellpers";


const statestore = [
    {
        myName: "Кто-то",
        botName: "Что-то"
    }
];

export default function Name (state = statestore, action){
    switch(action.type){
        case ACTION_NAME:
        return [action.payload];
        default:
        return state;
    }
}