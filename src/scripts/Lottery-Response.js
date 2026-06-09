import { history } from "../types/Attempts-array.js";
import { Interactor } from "../types/DOM-Interactor.js";
import { Messages } from "../types/Messages.js";
import { randomNumLogic } from "../scripts/Random-Num-Logic.js";
import { checkLotteryResult } from "./Lottery-Logic.js";

export function lotteryResponseLogic() {
  const userInput = Number(Interactor.getHTML("user_input").value);
  const responseElement = Interactor.getHTML("response");
  
  const randomNum = randomNumLogic();

  const message = checkLotteryResult(userInput, randomNum);

  if (message !== Messages.errorMessage()){

    history.push(message);

  }


    return Interactor.printMessage(message, responseElement);
}