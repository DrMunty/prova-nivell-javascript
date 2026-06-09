import { history } from "../types/Attempts-array";
import { Interactor } from "../types/DOM-Interactor";
import { Messages } from "../types/Messages";

export function seeHistory(){
    const responseElement = Interactor.getHTML("response")
    if (history.length === 0){
        return Interactor.printMessage(Messages.emptyArrayMessage(), responseElement);
    } else {
        return Interactor.printMessage(`<ol><li>${history.join('</li><li>')}</li></ol>`, responseElement);
    }
}