import { ACTION_NAME } from "../hellpers";



export async function set_name (myName, botName){
    let base = {
        myName: (myName === "") ?  "Кто-то" : myName,
        botName: (botName === "") ?  "Что-то" : botName 
    }
    return{
        type: ACTION_NAME,
        payload: base,
    };
};