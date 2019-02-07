//create function to generate of words but would like to be able to type any word in the dictionary

const word = ['mushroom', 'yoshi', 'princess', 'bowser'];

let randNum = Math.floor(Math.random() * word.length)
let newWord = word[randNum];
let underscore = []

//create uderscores based on length of the word that is typed into the box

let underscore = () => {
    for(let i =0; < newWord.length; i++) {
        underscore.push['_'];
    }
    return underscore;
}

console.log(underscore());

//create the keyboard for the letters that is able to be clicked and guess letter
//make guess on letters only able to be pressed once
//if right push to the wrong array
//if right push to the right array
