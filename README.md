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

In case we want to use a "start" button for the whole game, we can use the removeEventListener module to end the interaction, and restart it with the "start" button. That logic will be added later.

I also have the study the code in a more in-depth manner, because there are things that I don't completely understand (mostly, about variables scope and callback functions.)
