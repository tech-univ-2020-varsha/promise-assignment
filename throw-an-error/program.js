const json = process.argv[2];
const parsePromise = (json) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(json));
        }
        catch (err) {
            reject(err);
        }

    });
}

parsePromise(json).then(null, (err) => console.log(err.message));

module.exports = parsePromise;