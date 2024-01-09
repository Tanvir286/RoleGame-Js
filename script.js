
let user_input = document.querySelector('#user');
let view = document.querySelector('#display');
let result = document.querySelector('#result');


const array = [
    { Name: 'Sakib',      Role: 'all-rounder' },
    { Name: 'Tamim',      Role: 'batman' },
    { Name: 'Liton',      Role: 'batman' },
    { Name: 'Mahedi',     Role: 'all-rounder' },
    { Name: 'Mustafizur', Role: 'bowler' },
    { Name: 'Hasan',      Role: 'bowler' },
    { Name: 'Soumya',     Role: 'all-rounder' }
];


let currentIndex = 0;


let displayWord = () => {

    if(currentIndex == array.length){
        currentIndex = 0;
    }
    display.value= `${array[currentIndex].Name}`;  //array inside object
}


displayWord();


let checkAnswer = () => {

    const input_check = user_input.value.toLowerCase() 
   
    const correctAnswer = array[currentIndex].Role.toLowerCase();


    if (input_check === correctAnswer) {
        alert("Succesfully Guess");
    } 
    else {
        alert("Failed Guess");
    }
     
    user_input.value = '';
    currentIndex++;    
    displayWord();
}



