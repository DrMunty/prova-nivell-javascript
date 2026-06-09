import { describe, test, expect } from 'vitest';
import { lotteryResponseLogic } from '../src/scripts/Lottery-Logic';

describe('Testing funció lotteryResponseLogic', () => {
    test(`L'usuari ingressa el número 4 i el sistema genera un número aleatori diferent`, () => {

        const userInput = 4;
        const randomNum = 9;

        const result = lotteryResponseLogic(userInput, randomNum);

        const message = Messages.tryAgainMessage(userInput, randomNum)

        expect(result).toBe(message);
    });
});