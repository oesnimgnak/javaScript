const numbers = [1, 3, 4, 6, 8, 11, 12, 23, 34];

document.write(`<h2>For문 결과 <br></h2>`);
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        document.write(`${numbers[i]},`);
    }    
}

document.write(`<hr>`);

document.write(`<h2>ForEach 결과 <br></h2>`);
numbers.forEach(function(num1) {
    if (num1 > 10) {
        document.write(`${num1},`);
    }
});

document.write(`<hr>`);

document.write(`<h2>For of 결과 <br></h2>`);
for(let num1 of numbers) {
    if (num1 > 10) {
        document.write(`${num1},`);
    }    
}
