function seeHistory(){
    let responseElement = document.getElementById("response")
    if (history.length === 0){
        responseElement.innerHTML = "Aún no hay ningún intento registrado."
    } else {
    return responseElement.innerHTML = history.join('<br>')
    }
}