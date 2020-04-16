# Node.js

- Node.js is a platform it allows you to run a JavaScript code in a computer.
- Before Node the JavaScript Code that only run on through browser,  
  &nbsp;  
  ```ruby
  window.alert("Hello World")
  console.log("Hello World")
  ```

# Features

- Using JavaScript.
- Extremly Fast.
- Utilize Google's V8 engine written in C++.
- V8 compiles JavaScript code in to machine code for computer.
- Build Web, Mobile and Desktop Apps.
- We are using npm(i.e)Node Package Manager which is the world's largest library for open sources packages.
- Great for building Real Time Applications.

# Installation

- Visit, https://nodejs.org/en/
- Download the Recommended Version.
- To check the current version  
  &nbsp;  
  ```ruby
    node -v
  ```
- Eg: In cmd prompt -> check -> node -> print -> console.log("Hello World")

# JavaScript in Browser Environment:

 In the Browser Environment window object is the top level wrapper object and the document object inside window object.
 
- In Browser -> Inspect -> console -> window -> displays windows properties
- window.open("www.AndroidPillars.com")
- window.document -> indicates the current screen of browser.
- document.querySelector("body").style.backgroundColor="red"; -> changes the background color of the screen.

# JavaScript in Node.js Environment:

- Similarly like window object in Node we are having global and process for document.
- In cmd prompt -> check -> node -> print -> global -> which lists the properties
- for Exit -> process.exit();

# Getting started with Node.Js:

- Install -> Visual Studio Code -> Create Folder in drive -> Open that Folder through Visual Studio Code.
- Create app.js -> print -> console.log("Hello World"); 
- Go to the App folder -> Enter cmd at the top bar -> In cmd prompt -> node app.js
- O/P -> Hello World

# Functions:

- In JavaScript, Functions are first class objects. which means they can be,
<br> - Stored in a variable, object, or array.
<br> - Passed as an argument to a function.
<br> - Returned from a function.

- In JavaScript we use var/let/const for creating variables.

Syntax:

function sum(a,b){
return a+b;
}

const total = sum(4,5);
console.log("Total: ", total);

O/P -> Total: 9

# Import/Export:

- Seperate the file which we are using as common.
- Create helper.js -> which Export and Import that in -> app.js
- Syntax -> console.log("Process: ", process);
- If we run -> find a object -> Module -> exports -> which is currently empty.
- require -> which is used to load own module or core node js modules as well as third party modules. 

Syntax:

helpers.js:

function sum(a,b){
return a+b;
}

module.exports = {
sum
};

console.log("Process: ", process);

app.js:

const helpers = require("./helpers");

const total = helpers.sum(4,5);

console.log("Total: ", total);

# Arrow Function:

- Compare to Normal functions, Arrow functions don't have their context(i.e)this keyword.

helpers.js:

function sum(a,b){
return a+b;
}

as,

const sum = (a,b) => {
return a+b;
}

or

const sum = (a,b) => a+b;

or

exports.sum = (a,b) => a+b;

# Object Destructuring:

app.js:

const helpers = require("./helpers");

const total = helpers.sum(4,5);

console.log("Total: ", total);

as,

const { sum } = require("./helpers");

const total = sum(4,5);

console.log("Total: ", total);

# Node Js Core Modules:

const { sum } = require("./helpers");

const http = require("http"); //Load from core node module

const server = http.createServer((req,res) => {
 res.end("Hello World");
 });
 
 sever.listen(3000);

const total = sum(4,5);

console.log("Total: ", total);

- Run the cmd prompt O/P
- Now in Browser -> http://localhost:3000/ -> We created the Server using http module.





















