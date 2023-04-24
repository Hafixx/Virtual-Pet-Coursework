# Overview


Welcome to my Virtual Pet Project, This project is an enjoyable and captivating way to look after your virtual pet. You can use the buttons in this game to feed, play with, clean up after, and put your pet to sleep. mini-games in which you can play rock-paper-scissors or guess the number are available. I created a responsive and easy-to-use interface for interacting with your pet using HTML, CSS, and JavaScript. Since everything is kept in local storage, you can save your pet's status and return to the game later without losing your progress. In this project, you can give your pet a name that will be displayed and kept in local storage as a way to personalize it



# Main Attributes 
This are some of the main attributes used to create my virtual pet.

### Change Pet Name 
* The changeName() function when clicked is responsible for changing the name displayed on the web page 

 ### Pet buttons 
* This function enables the user to interact with the virtual pet on the web page by clicking on various buttons that trigger different actions.
* This buttons include feed,clean,sleep and restart buttons by clicking on this buttons they trigger the meters to either increase or reduce its value.
* However, the restart button stands out by clicking this button the pet meter values are automatically sets all meters back to its initial value.
* Also, when the pet dies a popup display shows informing the user about the number of seconds your pet lived in this popup display there is a reload button which when clicked automatically sets all meters back to its initial value.
 ## Mini Games
 * This function allows users to click and select mini game from the dropdown menu.
 * Once the game is selected a popup is shown contains its contents.
## Structure 
This structure of the virtual pet is as follows:

       *HTML
       
        *CSS
        
        *JAVASCRIPT
        
 ## Client Structure
 ```
client
 ┣ background-image
 ┣ bgrd.jpg
 ┣ index.html
 ┣ index.js
 ┣ istockphoto-697517400-612x612.jpg
 ┣ paper.png
 ┣ rock.png
 ┣ scissors.png
 ┗ style.css
 package-lock-json
 package.json
 README.md
 server.mjs
```
   
***
How to Install
------------
In order to install this and run it on a server you will;

You will need to download the node modules from your terminal

     npm install 
    
To start the server :
~~~
npm start
~~~
In order to display go on you browser;
~~~
localhost.8080
~~~

