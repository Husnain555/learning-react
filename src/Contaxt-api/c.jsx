import {createContext} from "react";
import {D} from "./d";
import {E} from "./e";
import {Zamna11} from "../Props/props";

export const User = createContext();
export const brother = createContext();
export const Props = createContext()
export function Consumer() {
    return (
        <div>
            <h1>Hello bhi jan </h1>
            <User.Provider value = {'my name is husnain'}>
                <D/>
            </User.Provider>
            <brother.Provider value = {'my name is husnain babar'}>
                <E/>
            </brother.Provider>
            <Props.Provider value = {'my name is zaman'}>
                <Zamna11/>
            </Props.Provider>
        </div>
    )
}