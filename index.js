import { Interactor } from "./src/types/DOM-Interactor";
import { seeHistory } from "./src/scripts/Attempts-Array";
import { lotteryResponseLogic } from "./src/scripts/Lottery-Logic";

const history = [];

Interactor.getHTML("play_lottery").addEventListener("click", () => {
  lotteryResponseLogic(history); 
});

Interactor.getHTML("see_attempts").addEventListener("click", () => {
  seeHistory(history);
});