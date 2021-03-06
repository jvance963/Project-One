# Project-One

Description

This project is an iteration of a hangman game in which one would submit a word for another user to guess and then with each wrong answer a figure would appear to signal "Game Over." However, I wanted to specifically build this game themed for kids but mainly mine as he is obsessed with Super Mario. He enjoys hangman on paper, so I thought this would be great for him to interact with in hopes that it could just be a fun game for him to play.

My project solves the problem of making normal hangman on paper a little more enjoyable and something that is geared towards a younger audience. In hangman the word to guess is represented by a row of dashes, representing each letter of the word. 
In most variants, proper nouns, such as names, places, and brands, are not allowed whereas here you can use any word you want.
If the guessing player suggests a letter which occurs in the word, the other player writes it in all its correct positions. 
If the suggested letter or number does not occur in the word, the other player draws one element of a hanged man stick figure as a tally mark.

The player guessing the word may, at any time, attempt to guess letters in the world by clicking on the make-shift keyboard in the bottome right corner. The buttons will turn red once you hover over them.  
You have 6 attempts to guess the word by clicking on the letters and as you click the wrong letters mario will begin to appear and if you answer correctly then the left box with underscores will be filled with the users correct guess. 
If the word is correct, the game is over and the guesser wins. 

User Stories and Features

I had pretty much already made the determination that I was going to attempt to build a creative hang-man game that my child could play with. We normally play games such as hangman while waiting for food at a restaurant, or traveling on vacation. I thought "I could build out a Mario Game" as his room has stickers of Mario around is room as if Mario was running to save the princess, we made it look like a real level. 

Naturally I focused on the HTML and CSS portion of this game a bit more than I should have at the beginning. In hindsight the JS was my sticking point as the logic was a lot more instensive than I originally thought. However it was quite enjoyable to be able to place everything and interact. 

- Bowser and Luigi jumping added with CSS animation was an amazing feature that did not take much time to incorporate and ended up being a hit. However, I would like to add in the feature of Bowser jumping when the user loses. I would like to make luigi jump when the user wins. 
- Would like to incorporate a reset button so that the user does not have to reset the browser each time. 
- Would like to turn the letter red when user clicks letter on the keyboard and also make it so that user can only click once.


Technologies

- I thought it would be great to theme this as mentioned. I wondered for a bit in the beginning stages how I would get Mario body parts to appear (I know it sounds morbid). 
-I thought to use the snippet tool to cut pieces. However, I found this to be tedious and also it would not cut him properly at all. 
-So I then looked into using "Paint-S" in the apple store where I would zoom into the picture at 2000% and methodically clicked away the pixels until I could get clean cuts. So I saved each individual body parts to match with the click count if the user answered with a wrong letter causing a "mismatch."

Primary Languages

- I used HTML, CSS and JavaScript for this project and I had a great time building this out and it really put my mind to work to have this function the way I intended. I used VS Code for my text editor for this project. 


Installation

There is nothing to install for this project. This is a web-based application that currently functions with a new word when you refresh the browser. 

Setting up the game (each hyphen represents a step)

- choose which game to create
- choose a them
- after game and theme were created then I began my wireframming for the game in which I would design where the characters would go and be set up. 
- Once this was created and I had my ideas on paper I began building out my HTML in VS Code. I knew that I would be wrapping everything in <div> tags both as a whole and individually. 
 - I began the <div> tags in with the images, and then I moved onto the letters and then moving onto id's for the parts of mario so I could used getElementByID in my JS.
 - After properly executed the build out of the HTML, I moved onto my CSS.
 - Once moving on to the CSS I focused primarily on placing all my images in their proper position.
 - finding that flexbox would not work for the exact specification that I wanted/needed I rendered my pictures as "absolute" and positioned the height and width individually. 
 - Once positioned to my proper specification I was able to then focus on my CSS animation which allowed me to successfully make luigi and boser jump using the @ keyframes "transform" method. 
 - I then focused on the hover button and when the user hovers over the clickable buttons on my make shift keyboard which I assigned as links in HTML. 
 
 JS
 
 - 

if you would like to run this program locally...

- Sign in an creat a github account at www.github.com
- Once account is created you can click the fork repository which looks like a "fork" in the top right corner of the website
- You can then click the clone button and copy the link
- open your terminal on your computer and clone the repository on the destination folder of your choice. 
-Once complete then "cd" into the folder and with the command "open index.html" this will open the file locally and you can run the application.
-This application will run best in google chrome. 
