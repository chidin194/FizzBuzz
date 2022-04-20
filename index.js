
for(let i=1; i<=100; i++) {

    let result = [];

    if(i % 3 === 0){
        result.push("Fizz")
    }

    if(i % 5 === 0) {
        result.push("Buzz")
    }

    if(i % 7 === 0) {
        result.push("Bang")
    }

    if(i % 11 === 0) {
        result = ["Bong"];
    }

    if(i % 13 === 0) {
        const indexOfFirstB = result.findIndex(item => item[0] === "B");
        result.splice(indexOfFirstB, 0, "Fezz");
    }

    if(i % 17 === 0) {
        result.reverse();
    }

    if (result.length === 0) {
        result.push(i.toString());
    }

    console.log(result.join(""));
}
