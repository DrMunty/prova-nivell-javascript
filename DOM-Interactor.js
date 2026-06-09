class Interactor {
    constructor(){}

    static getHTML(id) {return document.getElementById(id)}

    static printMessage (message, element) {return element.innerHTML = message}
}