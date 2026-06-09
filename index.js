import { Interactor } from "./src/types/DOM-Interactor";
import { seeHistory } from "./src/scripts/See-attempts";
import { lotteryResponseLogic } from "./src/scripts/Lottery-Logic";

Interactor.getHTML("play_lottery").addEventListener("click", () => {
  lotteryResponseLogic(); 
});

Interactor.getHTML("see_attempts").addEventListener("click", () => {
  seeHistory();
});