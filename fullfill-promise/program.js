const fulfillPromise = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("FULFILLED!");
        }, 600);
    }).then((value) => console.log(value));
}





module.exports = fulfillPromise;