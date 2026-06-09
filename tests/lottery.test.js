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