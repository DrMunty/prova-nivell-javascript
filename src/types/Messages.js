export class Messages {
  constructor (){}

  static errorMessage() {
    return `Siusplau, introdueix un número vàlid.`;
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

