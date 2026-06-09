class Messages {
  constructor (){}

  static errorMessage() {
    return `Por favor introduce un número válido.`;
  }

  static successMessage(userInput, randomNum) {
    return `Correcte, el teu número ${userInput} coincideix amb el de la loteria (${randomNum})!`;
  }

  static tryAgainMessage(userInput, randomNum) {
    return `El teu número ${userInput} no coincideix amb el de la loteria ${randomNum}, torna a intentar-ho!`;
  }

  static emptyArrayMessage() {
    return "Encara no hi ha cap intent registrat.";
  }
}

