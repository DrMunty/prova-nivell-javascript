import { Interactor } from "../types/DOM-Interactor";
import { Messages } from "../types/Messages";
import { randomNumLogic } from "./Random-Num-Logic";


export function lotteryResponseLogic(history) {
  const userInput = Number(Interactor.getHTML("user_input").value);
  const responseElement = Interactor.getHTML("response");

  if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    return Interactor.printMessage(Messages.errorMessage(), responseElement);
  }

  const randomNum = randomNumLogic();

  if (userInput == randomNum) {
    const message = Messages.successMessage(userInput, randomNum)
    history.push(message)
    return Interactor.printMessage(message, responseElement);
  } else {
    const message = Messages.tryAgainMessage(userInput, randomNum)
    history.push(message)
    return Interactor.printMessage(message, responseElement);
  }
}