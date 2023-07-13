const increment = (number, value=1) => {
    if (value == 0|| !value) return number + 1;
    else return number + value;
};

const result = increment(5);
console.log(result);