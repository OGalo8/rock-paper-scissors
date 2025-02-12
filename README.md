# rock-paper-scissors

A rock-paper-scissors game against the computer. The code will be in JS.

Already created the functions to obtain the string decisions for both the user and the computer.

The game is now complete and (thanks to ChatGPT) can handle an error on which the user writes a value in the prompt that is not 1,2 or 3.

Changed some of the dynamics of the functions to shape them according to what the initial problem in The Odin Project asked.

Added the overall winner of the game as a console message.

---- \*\*\*\* ----
Changing the UI. Now we will use buttons to play the game.
Refactored with the help of ChatGPT. Now almost all is happening inside the getHumanChoice function, because the humanChoice variable only exists inside the function.
But now, a lot of after-choice logic is taking place inside the playGame function.
Also, now we can define the max number of rounds per game, and show a winner at the end.

At the end of the game, we are now disabling the buttons, so no more interactions can be done (except for reseting the game).
We now are displaying everything in the UI and not in the console. We added a restart button (with the help of ChatGPT) and it helps us to restart game variables, erase all js-created elements and reactvate button interaction after we obtain an overall winner.
