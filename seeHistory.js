function seeHistory(history){
    const responseElement = Interactor.getHTML("response")
    if (history.length === 0){
        return Interactor.printMessage(Messages.emptyArrayMessage(), responseElement);
    } else {
        return Interactor.printMessage(history.join('<br>'), responseElement);
    }
}