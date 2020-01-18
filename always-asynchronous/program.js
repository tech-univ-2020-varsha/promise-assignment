const promisify = () => {
    return new Promise((resolve, reject) => {
        resolve('PROMISE VALUE')
    });
}



const checkFunc = () => {
    promisify().then(console.log);
    console.log('MAIN PROGRAM');
}


module.exports = checkFunc;