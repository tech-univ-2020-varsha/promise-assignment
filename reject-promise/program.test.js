const rejectPromise = require('./program');

describe('the reject promise', () => {
    it('should check if promise is returned after promisifying', () => {
        const result = rejectPromise();
        expect(typeof result).toBe('object')
    });


    it('should execute console.log with value of FULFILLED', () => {

        console.log = jest.fn();
        return rejectPromise().catch(() => {
            expect(console.log).toHaveBeenCalledWith('REJECTED!');
        })

    });

});