var withCount = fn => {
  let count = 0;

  return (...args) => {
    console.log(`Count: ${++count}`);
    return fn(...args);
  };
};

var yell = s => s.toUpperCase().concat('!!!');

var countedYell = withCount(yell);

console.log(countedYell('Welcome'));
console.log(countedYell('Welcome to California'));
console.log(countedYell('Welcome to the Hotel California'));
