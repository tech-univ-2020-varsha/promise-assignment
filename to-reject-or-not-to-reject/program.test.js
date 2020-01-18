const promisify = require('./program');

describe('the function that proves, promises may only resolve one time', () => {
    it('should check if promise is returned after promisifying', () => {
        const result = promisify();
        expect(typeof result).toBe('object')
    });

    it('should resolve promise with a value of I FIRED', () => {
        const result = promisify();
        return expect(result).resolves.toBe('I FIRED');
    });

    it('should not execute console.log with value of I DID NOT FIRE', () => {

        console.log = jest.fn();
        const result = promisify();
        return expect(console.log).not.toHaveBeenCalledWith('I DID NOT FIRE');

    });

});