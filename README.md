# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Daniel Ortiz

Time spent: 14 hours spent in total

Link to project: https://vagabond-chill-maize.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [Y] "Start" button toggles between "Start" and "Stop" when clicked.
- [Y] Game buttons each light up and play a sound when clicked.
- [Y] Computer plays back sequence of clues including sound and visual cue for each button
- [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [Y] User wins the game after guessing a complete pattern
- [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
- [Y] More than 4 functional game buttons
- [Y] Playback speeds up on each turn
- [Y] Computer picks a different pattern each time the game is played
- [Y] Player only loses after 3 mistakes (instead of on the first mistake)
- [Y] Game button appearance change goes beyond color (e.g. add an image)
- [Y] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Y] The amount of time one has for a given clue is randomized
- [Y] Start button plays a song at the beginning of a game
- [Y] Each button moves a slight amount to indicate being clicked
- [Y] Each button has a unique sound effect
- [almost] Health bar in a seperate .js file for when a wrong button is hit

## Video Walkthrough (GIF)

Here is all of the features except timer running out

https://cdn.glitch.global/6f4bbcfa-3877-47d7-81fc-00f2db4128b0/light-sound-game.gif?v=1650671478456

Here is the timer running out

https://cdn.glitch.global/6f4bbcfa-3877-47d7-81fc-00f2db4128b0/light-sound-game2.gif?v=1650672886838

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

https://devdocs.io/javascript/

https://www.udemy.com/course-dashboard-redirect/?course_id=1565838

CSS in 100 Seconds - YouTube

JavaScript in 100 Seconds - YouTube

HTML in 100 Seconds - YouTube

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

At a certain point after much of the game was completed, I was stuck with a problem I was having for a while. I continuted
the project despite this issue to ensure I could complete much of it and not waste time.The problem was that the start button wouldn't register, and I could not figure out why
for a good amount of time. The buttons worked, the colors were correct and every image was fine, so I realized it could not be the CSS file. Maybe my javascript
wasn't working, so I searched the Start method, I could not figure out why it wouldn't work, so I figured it may be a logic problem. So I console logged in as many
placed as I could to identify where the error was. Soon I realized that not even the console logs appeared, meaning start was not being called in the first place. I thought about this for a while,
why wouldn't my console logs output? It had to mean they were never reached, So I check index.html and I finally found out that I did not write id = "intro" and instead wrote just intro, so the attribute was wrong (facepalm).
I realized that I had to identify the root of the problem, go step by step to identify where my logic was flawed, and finally discovered it.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I wonder what are the best ways to develop a pretty site, I feel the right libraries could really make this website so much better. Such as a way to fit
the images in my buttons to the shape of the buttons themselves without too much effort. Maybe a way to add movement to the screen, how to embed a video to the background,
perhaps ways of creating transitions on the page, as well as how to do more backend applications, such as creating databases and connecting it for users to be able to log in information, I wanted
this on the project for a leaderboard of sorts, whoever could memorize the longest game would win and friends could compete and improve their memory.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

I was in the middle of creating a health bar for the project so that whenever a player makes a mistake, the health bar would decrease, I realized the easiest way to create it was
with a seperate file to seperate the main code from the healthbar. I would also need to display it seperately so I created space for it in the style.css file. I would also have loved to
create a leaderboard for the game, so that friends could compete. I also wanted to make several screens, with different button images, amounts, layouts as different boss battles, this one is a
dragon for example, the next one could be a troll, or a giant, or an evil knight, etc. I would have also liked to add live cooperative play, so that two players can play at the same time, and if
one forgets a part of the button sequence, the other player could press the button and the game would continue anyway, as a way of sharing memory and cooperation. I would have also liked to add a link
for resources on how to improve memory as a URL link, as it is an important ability to have strong memory for everyday life.

## Interview Recording URL Link

https://www.loom.com/share/2c9cedf5a87d4b8ca6773e572ee50513

## License

    Copyright [Daniel Ortiz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
