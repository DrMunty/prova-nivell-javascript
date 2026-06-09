import { Messages } from "../types/Messages";

export function checkLotteryResult(userInput, randomNum) {
    if (userInput === randomNum) {
        return Messages.successMessage(userInput, randomNum);
    } else {
        return Messages.tryAgainMessage(userInput, randomNum);
    }
}
