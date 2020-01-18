require('es6-promise');
const promiseFunc = require('./program');

describe('the fulfill promise', () => {
    it('should check if promise is returned after promisifying', () => {
        const result = promiseFunc();
        expect(typeof result).toBe('object')
    });


    it('should execute console.log with value of FULFILLED', () => {

        console.log = jest.fn();
        return promiseFunc().then(() => {
            expect(console.log).toHaveBeenCalledWith('FULFILLED!');
        })

    });

});