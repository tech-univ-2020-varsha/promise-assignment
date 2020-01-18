const checkFunc = require('./program');

describe('the check promise', () => {



    it('should execute console.log with value of PROMISE VALUE after promise is resolved', async () => {

        console.log = jest.fn();
        await checkFunc();
        return expect(console.log).toHaveBeenCalledWith('PROMISE VALUE');
    });

    it('should execute console.log with value of MAIN PROGRAM when run asynchronously', () => {

        console.log = jest.fn();
        checkFunc();
        expect(console.log).toHaveBeenCalledWith('MAIN PROGRAM');

    });

});