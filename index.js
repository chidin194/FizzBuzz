// FizzBuzz first commit

for(let i=1; i<=100; i++) {

    let result = [];

    if(i % 3 === 0)
        result.push("Fizz")

    if(i % 5 === 0)
        result.push("Buzz")

    if (result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}
