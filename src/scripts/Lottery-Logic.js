import { history } from "../types/Attempts-array";
import { Interactor } from "../types/DOM-Interactor";
import { Messages } from "../types/Messages";
import { randomNumLogic } from "../scripts/Random-Num-Logic";

export function checkLotteryResult(userInput, randomNum) {
    if (userInput === randomNum) {
        return Messages.successMessage(userInput, randomNum);
    } else {
        return Messages.tryAgainMessage(userInput, randomNum);
    }
}
export function lotteryResponseLogic() {
  const userInput = Number(Interactor.getHTML("user_input").value);
  const responseElement = Interactor.getHTML("response");

  if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    return Interactor.printMessage(Messages.errorMessage(), responseElement);
  }

  const randomNum = randomNumLogic();

const message = checkLotteryResult(userInput, randomNum);

    history.push(message);

    return Interactor.printMessage(message, responseElement);
}