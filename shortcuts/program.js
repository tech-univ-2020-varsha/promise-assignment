let promiseResolve = Promise.resolve('Resolved');
let promiseReject = Promise.reject(new Error('Rejected'));

promiseReject.catch(function (err) {
    console.log(err.message);
});