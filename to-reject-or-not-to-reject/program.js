const onRejected = (error) => {
    console.log(error.message);
}

const promisify = () => {
    resolve = console.log;
    reject = onRejected;
    return new Promise((resolve, reject) => {
        resolve('I FIRED');
        reject(new Error('I DID NOT FIRE'));
    });
};





module.exports = promisify;