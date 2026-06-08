
function randomNumLogic() {
   return Math.floor(Math.random() * 10) + 1;
}

const history= [];

function lotteryResponseLogic() {
    let randomNum = randomNumLogic();
    const userInput = Number(document.getElementById('user_input').value)
    let responseElement = document.getElementById("response")
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

function seeHistory(){
    let responseElement = document.getElementById("response")
    if (history.length === 0){
        responseElement.innerHTML = "Aún no hay ningún intento registrado."
    } else {
    return responseElement.innerHTML = history.join('<br>')
    }
}