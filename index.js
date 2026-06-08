const history = [];

Interactor.getHTML("lotteryResponseLogic").addEventListener("click", () => {
  lotteryResponseLogic(history); 
});

Interactor.getHTML("seeHistory").addEventListener("click", () => {
  seeHistory(history)});
