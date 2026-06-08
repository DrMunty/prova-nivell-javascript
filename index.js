const history = [];

function lotteryResponseLogic() {
    let randomNum = randomNumLogic();
    let userInput = Number(Interactor.getHTML('user_input').value)
    let responseElement = Interactor.getHTML("response")
    let errorMessage = "Por favor introduce un número válido.";
    let succesMessage = `Correcte, el teu número ${userInput} coincideix amb el de la loteria (${randomNum})!`
    let tryAgainMessage = `El teu número ${userInput} no coincideix amb el de la loteria ${randomNum}, torna a intentar-ho!`
    
    if (userInput < 1 || userInput > 10 || isNaN(userInput)){
        return responseElement.innerHTML= errorMessage
    } else if (userInput === randomNum) {
        history.push(succesMessage)
        return responseElement.innerHTML = succesMessage

        }
      else {
        history.push(tryAgainMessage)
        return responseElement.innerHTML = tryAgainMessage

    }

}

