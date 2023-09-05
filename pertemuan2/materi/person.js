const person1 = () => {
    return {
        name: 'Andy',
        telephone: 8123245,
    };
};

const person2 = () => {
    return {
        name: 'Marry',
        telephone: 8123245,
    };
};

const info = person1();
const info2 = person2();
export { info, info2 };