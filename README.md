# Pacman like game

This is a project created with React, to improve my skills and test myself making a web game similar to pacman.


![image](https://user-images.githubusercontent.com/103930301/221374466-5b8dc163-a5e8-4489-8007-d7fa598717de.png)


The game has 2 different modes:

## Trial


![image](https://user-images.githubusercontent.com/103930301/221375259-841e8f2f-1cc9-434c-9456-f11e8f7f8ddc.png)


In this mode the player has to collect all the pizzas in the given time.
By incresing the difficulty rocks will appear to restrict player's movements a bit.

## Seeker


![image](https://user-images.githubusercontent.com/103930301/221375311-f79aa5f3-5547-40a7-a01b-c5f2a6ff847b.png)


This mode is inspired by the daxter mini-game from Jak3 ([Eco grid game](https://jakanddaxter.fandom.com/wiki/Eco_grid_game)).
Like the previous mode, the player has to collect all the pizzas, but instead of a timer, an enemy called seeker will appear and if he touches the player it will be game over.

Likewise, as the difficulty increases, rocks will appear to restrict the player's movements a bit, but it will also restrict seeker's movements.

Hope everyone who plays my game enjoys it :)


### PD: This is open source so you can use it to make your own games or whatever you want. For example, you can easily change the `board size`, `seeker speed` and `timer` in trial mode by just changing a constant in `src/common/fixtures.js file`.
