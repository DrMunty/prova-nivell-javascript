import { describe, test, expect } from 'vitest';
import { checkLotteryResult } from '../src/scripts/Lottery-Logic';
import { Messages } from '../src/types/Messages';

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 4 i el sistema genera un número aleatori diferent`, () => {

        const userInput = 4;
        const randomNum = 9;

        const result = checkLotteryResult(userInput, randomNum);

        const message = Messages.tryAgainMessage(userInput, randomNum)

        expect(result).toBe(message);
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 7 i el sistema genera el mateix número aleatori`, () => {

        const userInput = 7;
        const randomNum = 7;

        const result = checkLotteryResult(userInput, randomNum);

        const message = Messages.successMessage(userInput, randomNum)

        expect(result).toBe(message);
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa un string i la app ha de mostrar un missatge d'error`, () => {

        const userInput = "Hola";
        const randomNum = 5;

        const result = checkLotteryResult(userInput, randomNum);

        const message = Messages.errorMessage()

        expect(result).toBe(message);
    });
});

describe('Testing funció checkLotteryResult', () => {
    test(`L'usuari ingressa el número 20 i la app ha de mostrar un missatge d'error`, () => {

        const userInput = 20;
        const randomNum = 5;

        const result = checkLotteryResult(userInput, randomNum);

        const message = Messages.errorMessage()

        expect(result).toBe(message);
    });
});