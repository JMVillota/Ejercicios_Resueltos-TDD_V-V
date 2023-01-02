// Deber Jmvillota

import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
    test('should works', () => {
        const value = 'Even Prime,Odd Prime,';
        const resp = game(2, 3);
        expect(resp).toEqual(value);
    });


    test('should works', () => {
        const value = 'Even Prime,Odd Prime,Even ,Odd Prime,';
        const resp = game(2, 5);
        expect(resp).toEqual(value);
    });


    test('should works', () => {
        const value = 'Even Prime,Odd Prime,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,Odd ,Even ,Odd ,Even ,Odd Prime,Even ,Odd ,Even ,';
        const resp = game(2, 100);
        expect(resp).toEqual(value);
    });
});