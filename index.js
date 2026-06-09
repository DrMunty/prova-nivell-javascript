import { Interactor } from "./src/types/DOM-Interactor";
import { seeHistory } from "./src/scripts/Attempts-Array";
import { lotteryResponseLogic} from "./src/scripts/Random-Num-Logic";

const history = [];

Interactor.getHTML("lotteryResponseLogic").addEventListener("click", () => {
  lotteryResponseLogic(history); 
});

Interactor.getHTML("seeHistory").addEventListener("click", () => {
  seeHistory(history)});
