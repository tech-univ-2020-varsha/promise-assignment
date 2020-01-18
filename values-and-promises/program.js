const attachTitle = (arg1) => {
    return `DR. ${arg1}`;
}

const newPromise = Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);