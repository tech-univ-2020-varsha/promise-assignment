const all = (promise1, promise2) => {
    return new Promise((resolve, reject) => {
        const countArray = [];
        let count = 0;
        promise1.then(
            (val) => {
                count++;
                countArray[0] = val;
                if (count >= 2)
                    resolve(countArray);
            });
        promise2.then((val) => {
            count++;
            countArray[1] = val;
            if (count >= 2)
                resolve(countArray);
        });

    });






}



all(getPromise1(), getPromise2()).then(console.log);