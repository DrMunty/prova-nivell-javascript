function lotteryResponseLogic(history) {
  const randomNum = randomNumLogic();
  const userInput = Number(Interactor.getHTML("user_input").value);
  const responseElement = Interactor.getHTML("response");

  if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    return Interactor.printMessage(Messages.errorMessage(), responseElement);
  } else if (userInput === randomNum) {
    history.push(Messages.successMessage(userInput, randomNum));
    return Interactor.printMessage(Messages.succcesMessage(userInput, randomNum), responseElement);
  } else {
    history.push(Messages.tryAgainMessage(userInput,randomNum));
    return Interactor.printMessage(Messages.tryAgainMessage(userInput, randomNum), responseElement)
  }
}