console.log('in script.js');


let myBirthday = 'June 13th';
//      ^             ^
// Declaration & Assignment


// Evaluation - computing
let month = 'June';
let date = '13th';

//          = 'June' + '13th'
// myBirthday = month + date;
// When using variable interpolation (dollar signs), use back ticks instead of quotes
// Can use equations inside of dollar signs
myBirthday = `${month} ${date}`;

console.log(myBirthday); 

let equation = `This equation is ${5*5}`;
console.log(equation);
// The variable equation equals 5*5, which is 25

let myBirthdayDate = {
// Objects use key & value
// Also called properties with their specific values
// month and date are keys; june and 13th are their values
    month: 'June',
    date:  '13th',
    location: {
        city: 'Burnsville',
        state: 'MN'
    },
    // To get to state, you would put myBirthdaydate.location.state
    attendees: [
        {
            name: 'Lisa',
            relationship: 'mother',
            wearing: ['shoes', 'skirt'],
            age: 58
        },
        // To get to relationship, you would put myBirthdaydate.attendees[0].relationship
        {
            name: 'Jesse',
            relationship: 'brother',
            wearing: ['hat', 'shirt', 'shorts'],
            age: 20
        }
        // To get to shirt, you would put myBirthdayDate.attendees[1].wearing[1]
    ]
}

myBirthday = `my bday is on ${myBirthdayDate.month} ${myBirthdayDate.date}`;
console.log(myBirthday);

// as a for loop

for (let person of myBirthdayDate.attendees) {
    person.name;
// the parameter is the attendee(person) of the attendee object array
// for each person, go by each name
    for (let clothing of person.wearing){
        console.log(
            `${person.name} is wearing ${clothing}`
        )
    }
// the parameter is each piece of clothing that each person wears
// from there, you log the name and piece of clothing
// this loops through the array and pulls up each group of objects
}

// Input: a person
// Output: boolean (true/false)
function canTheyDrinkAtBirthday(human) {
    if (human.age >= 21) {
        return true;
    }
    else {
        return false;
    }
}

let canLisaDrink = canTheyDrinkAtBirthday(myBirthdayDate.attendees[0]);
console.log(canLisaDrink);

let canJesseDrink = canTheyDrinkAtBirthday(myBirthdayDate.attendees[1]);
console.log(canJesseDrink);


// Practicing Language

// Create a function called isWordSilly with the parameter aWord
function isWordSilly(aWord) {
     let sillyWords = ['squeegee', 'barnacle', 'barbecue', 'quagmire', 'bog', 'loofah'];
      // Declare an array with these^ string values in it

  // Create for loop where there is the parameter oneSillyWord of the variable sillyWords
  // Checking if any of the words in the string array, equal the specific word
    for (let oneSillyWord of sillyWords){
      if (oneSillyWord === aWord) {
        return true;
          // then if that parameter is the same as the parameter aWord, the function returns as true
      }
    }

    return false;
      // if it is not then it returns as false
      // putting the return false here instead of inside the for loop means that it loops through the entire array
      // if it's put inside it'll just return the first value as true or false and then stop
}

for (let i = 0; i < sillyWords.length; i++) {
    let oneSillyWord = sillyWords[i];

}                                               // These two for loops are doing the same thing

for (let oneSillyWord of sillyWords) {
    
}