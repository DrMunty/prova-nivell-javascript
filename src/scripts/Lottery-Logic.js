import { Messages } from "../types/Messages";

export function checkLotteryResult(userInput, randomNum) {
    if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    return Messages.errorMessage();
    }
    if (userInput === randomNum) {
        return Messages.successMessage(userInput, randomNum);
    } else {
        return Messages.tryAgainMessage(userInput, randomNum);
    }
}
