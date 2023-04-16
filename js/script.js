// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 3 2023
// This file contains the JS functions for index.html, Unit4-01-HTML-GuessMyNumber

"use strict";

function guessNumber() {
  const MAX= 6
  const MIN= 1
  //get the user number
  let userNumber= parseInt(document.getElementById("user-number").value)
  //generate the random number
  let randomNumber= Math.floor((Math.random()*MAX)+MIN)
  //define program feedback
  let programFeedback=""
  // if statement "You guessed right"
  if (userNumber==randomNumber) {
    programFeedback = "You guessed right!"
  } 
  // if statement "You guessed wrong! Try again!""
  if (userNumber!=randomNumber) {
    programFeedback = "You guessed wrong! Try again!"
  }

  // display program feedback 
  document.getElementById('program-feedback').innerHTML = "The number you chose was "+userNumber+" and the number that was chosen was "+randomNumber+". "+programFeedback
}