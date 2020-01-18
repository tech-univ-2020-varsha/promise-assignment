const alwaysThrow = () => {
    throw new Error('OH NOES');
}

const iterate = (arg1) => {
    console.log(arg1);
    return arg1 + 1;
}


const promise = Promise.resolve(iterate(1));
promise.then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrow)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((err) => { console.log(err.message) });

