


export const idGenerator = () => {
    const randomNumber = Math.floor(Math.random() * (100000 - 10000)) + 10000;
    return randomNumber;
};