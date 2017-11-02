fizzBuzzArray = [];

for (let i =0; i<=15; i++) {
    if (i % 5 === 0  && i % 3 === 0) {
        fizzBuzzArray.push('fizzBuzz');
    }
    else if (i % 5 === 0 && i % 3 !== 0) {
        fizzBuzzArray.push('buzz');
    }
    else if (i % 3 === 0 && i % 5 !== 0) {
        fizzBuzzArray.push('fizz')
    }
    else {
        fizzBuzzArray.push(i);
    }
}
console.log(fizzBuzzArray);

function userInput() {
    $('input[type = "submit"]').on('click', function(event) {
        event.preventDefault();

        let numberInput = $(event.currentTarget).siblings('input');
        
        console.log($((numberInput).val()));

        console.log($(event.currentTarget).siblings('input'));

        console.log('form');
        console.log('submit');
    })
}

$(userInput);

