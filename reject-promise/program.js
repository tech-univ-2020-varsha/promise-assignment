const rejectPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(Error("REJECTED!"));
        }, 300);
    })
}
rejectPromise().then(null, (err) => console.log(err.message));

module.exports = rejectPromise;