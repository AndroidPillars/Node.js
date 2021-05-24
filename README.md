# Topics

| S.No | Content |
| --------	 | ------------ |
| 1 | [Node.js](README.md#nodejs) |
| 2 | [Features](README.md#features) |
| 3 | [Installation](README.md#installation) |
| 4 | [JavaScript in Browser Environment](README.md#javascript-in-browser-environment) |
| 5 | [JavaScript in Node.js Environment](README.md#javascript-in-nodejs-environment) |
| 6 | [Getting started with Node.Js](README.md#getting-started-with-nodejs) |
| 7 | [Functions](README.md#functions) |
| 8 | [Import/Export](README.md#importexport) |
| 9 | [Arrow Function](README.md#arrow-function) |
| 10 | [Object Destructuring](README.md#object-destructuring) |
| 11 | [Node Js Core Modules](README.md#node-js-core-modules) |
| 12 | [npm](README.md#npm) |
| 13 | [Express](README.md#express) |
| 14 | [Node js Event Loop](README.md#node-js-event-loop) |
| 15 | [Node js Asynchronous Programming](README.md#node-js-asynchronous-programming) |
| 16 | [Node js Synchronous Programming](README.md#node-js-synchronous-programming) |
| 17 | [Functional Approach](README.md#functional-approach) |
| 18 | [Thinks to get remember in Node js](README.md#thinks-to-get-remember-in-node-js) |
| 19 | [Creating Server with express](README.md#creating-server-with-express) |
| 20 | [Seperating Routes](README.md#seperating-routes) |
| 21 | [Middleware Explained](README.md#middleware-explained) |
| 22 | [Using Controllers](README.md#using-controllers) |
| 23 | [JSON](README.md#json) |
| 24 | [Postman](README.md#postman) |
| 25 | [Mongo db](README.md#mongo-db) |
| 26 | [How to Install MongoDB on Mac](README.md#how-to-install-mongodb-on-mac) |
| 27 | [Post Schema](README.md#post-schema) |
| 28 | [Creating a post](README.md#creating-a-post) |
| 29 | [Validation and Error Messages](README.md#validation-and-error-messages) |
| 30 | [Getting Post](README.md#getting-post) |
| 31 | [Code Refractor](README.md#code-refractor) |
| 32 | [Points to get Remember](README.md#points-to-get-remember) |

## Node.js

- Node.js is an open source server environment.
- It is not a programming language.
- It is just a platform it allows you to run a JavaScript code in a computer on Server side.
- Node.js has built-in libraries to handle web requests and responses so we don't need a seperate web server or other dependencies.
- Before Node the JavaScript Code that only run on through browser,  
  &nbsp;  
  ```ruby
  window.alert("Hello World")
  ```
  ```ruby
  console.log("Hello World")
  ```

## Features

- Using JavaScript.
- Extremly Fast -> Node js is built on Google's V8 engine written in C++.
- V8 compiles JavaScript code in to machine code faster.
- Build Web, Mobile and Desktop Apps.
- We are using npm(i.e)Node Package Manager which is the world's largest library for open sources packages.
- Great for building Real Time Applications.
- Single Threaded.
- I/O Non Blocking and Asynchronous.
- __Note:__ Node.js doesn't support CPU intensive work it's only work on I/O intensive.(i.e.) Mathematical Calculation doesn't support in Node.js

## Installation

- Install node by using https://nodejs.org/en/
- Download the Recommended Version.
- To check the current version  
  &nbsp;  
  ```ruby
  node -v
  ```
- <b>Example</b>,  
  &nbsp;  
  ```ruby
  node
  ```
  ```ruby
  console.log("Hello World")
  ```
  
## Modules

- Node Js Modules to be same as JavaScript libraries.
- Node Js has a set of built-in modules which you can use in your application with out any further installation.
- We can easily create our own modules and include in our application.
- We can include the in-built modules or your own modules in our application then you can use the require() function with the name of the module.

## JavaScript in Browser Environment

- In the Browser Environment window object is the top level wrapper object and the document object will come inside window   object.
- Go to the Browser -> Inspect -> console  
  &nbsp;  
  ```ruby
  window
  ```
    - where, window displays windows properties  
    &nbsp;  
  ```ruby
  window.open("www.AndroidPillars.com")
  ```
  ```ruby
  window.document
  ```
   - window.document indicates the current screen of browser.  
   &nbsp;  
    ```ruby
    document.querySelector("body").style.backgroundColor = "red";
    ```
   - It changes the background color of the screen.

## JavaScript in Node.js Environment

- Similarly like <b>window</b> object in Node we are having <b>global</b> and process for document.  
 &nbsp;  
  ```ruby
  node
  ```
  ```ruby
  global
  ```
  - Which lists the properties  
  &nbsp;  
- To <b>Exit</b>,  
  &nbsp;  
  ```ruby
  process.exit();
  ```
  For shortcut press ctrl + c 

## Getting started with Node.Js

- For Code Editor we will use __Visual Studio Code.__
- Install Visual Studio Code by using https://code.visualstudio.com/
- Create Folder in required drive.
- Open that Folder through Visual Studio Code.
- Create a file app.js 
  &nbsp;  
  ```ruby
  console.log("Hello World"); 
  ```
- Go to the App folder.
- Enter cmd at the top bar.
- In cmd prompt -> node app.js
- O/P -> Hello World

## Functions

- In JavaScript, Functions are first class objects from which means they can be,
  - Stored in a variable, object, or array.
  - Passed as an argument to a function.
  - Returned from a function.
- In JavaScript we use var/let/const for creating variables.  
  &nbsp;  
  <b>In app.js</b>   
  &nbsp;  
  ```ruby
  function sum(a,b){
  return a+b;
  }

  const total = sum(4,5);
  console.log("Total: ", total);
  ```
  - To Run in Terminal,  
  &nbsp;  
    ```ruby
    node app.js
    ```
  - O/P -> Total: 9

## Import/Export

- Seperate the file which we are going to use as common.
- Now Create helper.js which we are going to seperate & Export and Import that in app.js  
  &nbsp;  
  ```ruby
  console.log("Process: ", process);
  ```
  - where, process is similar to that of document in window
- If we run -> find a object -> Module -> exports: {} -> which is currently empty.
- We can add the functions that we create can add them in exports.
- Finally, whatever we are adding in the exports will be available in the entire application.  
  &nbsp;  
  <b>In helpers.js</b>  
  &nbsp;  
  ```ruby
  function sum(a, b) {
    return a + b;
  }

  module.exports = {
    sum
  };

  ```  
  <b>In app.js</b>  
  &nbsp;  
  ```ruby
  const helpers = require("./helpers");

  const total = helpers.sum(4, 5);
  console.log("Total: ", total);
  ```  
  &nbsp;  
- where <b>require</b>, is used to load own module or core node js modules as well as third party modules. 

# Arrow Function

- It is short, easy to understand and use.
- Compare to Normal functions, Arrow functions don't have their context(i.e)this keyword.  
  &nbsp;  
  <b>In helpers.js</b>  
  &nbsp;  
  ```ruby
  function sum(a,b){
    return a+b;
  }
  ```
  ```ruby
  const sum = (a,b) => {
    return a+b;
  }
  ```
  ```ruby
  const sum = (a,b) => a+b;
  ```
  ```ruby
  const sum = () => return a+b;
  ```
   - The above function indicates that there is no arguements.  
  &nbsp;  
  ```ruby
  const sum = a => return a;
  ```
   - The above function indicates that there is only one arguements.  
  &nbsp;  
  ```ruby
  module.exports = {
    sum
  };
  ```  
  ```ruby
  exports.sum = (a,b) => a+b;
  ```

# Object Destructuring

<b>In app.js</b>   
```ruby
const helpers = require("./helpers");

const total = helpers.sum(4,5);

console.log("Total: ", total);
```
```ruby
const { sum } = require("./helpers");

const total = sum(4, 5);
console.log("Total: ", total);
```

# Node Js Core Modules

<b>In app.js</b>   
```ruby
const { sum } = require("./helpers");
const http = require('http')

const server = http.createServer((req, res) => {
    res.end("Hello World")
})

server.listen(3000);

const total = sum(4, 5);
console.log("Total: ", total);
```
  - where, http it is the core mdoule comes from the node js.
  - <b>http</b> module comes with the create server method form which we can create the server.
  - 3000 is the port number.  
  &nbsp;   
- Now, Run the Terminal
- Now in Browser -> http://localhost:3000/
- O/P -> Hello World
- We created the Server using http module using node js.

# npm

- npm is the package manager for JavaScript and the world's largest software registry.
- Visit, https://www.npmjs.com/
- Search -> nodemon
- If we made any changes in Local then have to restart the server to communicate to the browser. To overcome that, we will
  nodemon
- First we need to install npm in project directory  
  &nbsp;   
  ```ruby
  npm init
  ```
- By Entering the necessary details it will create the file named package.json in the project directory.
- Now, In the Terminal  
  &nbsp;   
  ```ruby
  npm i nodemon
  ```
- Once it done you can find "dependencies": { "nodemon" } in package.json.
- Now, In "scripts" -> change as below mentioned,  
  &nbsp;   
  ```ruby
  "scripts": {
    "dev": "node app.js"
  },
  ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
- For changing that in nodemon  
  &nbsp;   
  ```ruby
  "scripts": {
    "dev": "nodemon app.js"
  },
  ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
  
# Express

- Express is a extremely popular packages for node js of building real web applications.
- Visit, https://www.npmjs.com/
- Search -> express
- Now, In the Terminal  
  &nbsp;   
  ```ruby
  npm i express
  ```
- Now, you can run the server using,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
  <b>In app.js</b>  
    &nbsp;   
    ```ruby
    const express = require('express')
    const app = express()
 
    app.get('/', (req, res) => {
        res.send('Hello World')
    })
 
    app.listen(3000)
    ```
- Once you Saved, Now in Browser -> http://localhost:3000/
- O/P -> Hello World

# Node js Event Loop

- Node js is a process that never stops.
- During multiple events process it Serves as First in and First out order(i.e) It does the job and move on to the next one.
- At some jobs it may take longer than usual(i.e) Reaching out to the remote sever, Connecting to the Database at that time it
  will handle through the callback function.
- It's start executing job if it takes longer than usual it will leave that responsibility to the callback function which will   eventually return once the process is done.
- Node js is a single threaded system.  
  &nbsp;   
  <b>In app.js</b>  
    &nbsp;   
    ```ruby
    const fs = require("fs");
    const fileName = "target.txt";

    fs.watch(fileName, () => console.log(`file changed!`));
    ```
    - where fs(file system) is one of the core Node js module.
    - It consists of two arguements(i.e) File name, callback
- Now create a .txt file and give it the name as target.txt
- Now, you can run the server using,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
- If you done any changes in target.txt and save then the callback gets hitted.

# Node js Asynchronous Programming

- Node js is single threaded non blocking I/O model.
- Even though it is single threaded - it is efficient because it is using non blocking event loop and keeps the event in a       stack.
- They will be executed one by one with out waiting for any one of these to complete instead they will be executed and           completed as the process is running in other callbacks.  
  &nbsp;   
  <b>In app.js</b>  
   &nbsp;   
    ```ruby
    const fs = require("fs");
    const fileName = "target.txt";

    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data.toString())
    });

    console.log('Node js async programming...');
    ```
  <b>In target.txt</b>  
   &nbsp;   
    ```ruby
    Hi glad to see you again!!!!!
    ```
  - Now, you can run the server using,  
    &nbsp;   
    ```ruby
    npm run dev
    ```
# Node js Synchronous Programming

- In Node js there is certain method available for doing Synchronous.
- They will be executed one by one but it will wait till certain task to get complete.  
   &nbsp;   
  <b>In app.js</b>  
   &nbsp;   
    ```ruby
    const fs = require("fs");
    const fileName = "target.txt";

    const data = fs.readFileSync(fileName)
    console.log(data.toString());

    console.log('Node js async programming...');
    ```
  <b>In target.txt</b>  
   &nbsp;   
    ```ruby
    Hi glad to see you again!!!!!
    ```
  - Now, you can run the server using,  
    &nbsp;   
    ```ruby
    npm run dev
    ```
    
# Functional Approach

- Distribute the responsibilities to different functions.  
  &nbsp;   
  <b>In app.js</b>  
   &nbsp;   
    ```ruby
    const fs = require("fs");
    const fileName = "target.txt";

    const mErrorHandler = mError => console.log(mError);

    const mDataHandler = data => console.log(data.toString());

    fs.readFile(fileName, (mError, data) => {
        if (mError) mErrorHandler(mError)

        mDataHandler(data)
    });

    console.log('Node js async programming...');
    ```
  <b>In target.txt</b>  
   &nbsp;   
    ```ruby
    Hi glad to see you again!!!!!
    ```
  - Now, you can run the server using,  
    &nbsp;   
    ```ruby
    npm run dev
    ```

# Thinks to get remember in Node js

- JavaScript Environment Browser/Server
- Understanding functions/Callback functions
- Event Loop
- Asynchronous (non-blocking) vs Synchronous (blocking)

# Creating Server with express

- Now Open the Text Editor and Create a new project
- In the Terminal Run  
    &nbsp;   
    ```ruby
    npm init
    ```
- By Entering the necessary details it will create the file named package.json in the project directory.
- Now, In the Terminal run, for installing express  
    &nbsp;   
    ```ruby
    npm i express
    ```
- Now, In the Terminal run, for installing nodemon  
    &nbsp;   
    ```ruby
    npm i nodemon
    ```
- Now, In "scripts" -> change as below mentioned,  
  &nbsp;   
  ```ruby
  "main": "app.js",
  "scripts": {
    "dev": "nodemon app.js"
  },
  ```
  <b>In app.js</b>  
   &nbsp;   
    ```ruby
    const express = require("express");
    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    const port = 8080;

    app.listen(port, () => {
      console.log(`Node js Api is Listening on port: ${port}`);
    });
    ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
  
# Seperating Routes

<b>In app.js</b>  
   ```ruby
   const express = require("express");
   const app = express();

   const { getPosts } = require("./routes/post");

   app.get("/", getPosts);

   const port = 8080;

   app.listen(port, () => {
      console.log(`Node js Api is Listening on port: ${port}`);
   });
   ```
<b>In routes/post.js</b>  
   ```ruby
   exports.getPosts = (req, res) => {
      res.send("Hello World!!!");
   };
   ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
  
# Middleware Explained

- Middleware executes in the middle(i.e) If something is Started or something going to end, inbetween we are going to do         something at the middle.
- Morgan is used to know in Terminal from which route you are getting the request.
- Now, In the Terminal   
  &nbsp;   
  ```ruby
  npm i morgan
  ```
- We can see one of the example in Middleware using Morgan.
- We can use the middleware using app.use() method.  
  &nbsp;  
  <b>In app.js</b>  
  &nbsp;  
  ```ruby
  const express = require("express");
  const app = express();
  const morgan = require("morgan");

  const { getPosts } = require("./routes/post");

  const mOwnMiddelWare = (req, res, next) => {
    console.log("middleware applied");
    next();
  };

  app.use(morgan("dev"));
  app.use(mOwnMiddelWare);

  app.get("/", getPosts);

  const port = 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```
  <b>In routes/post.js</b>  
   &nbsp; 
   ```ruby
   exports.getPosts = (req, res) => {
      res.send("Hello World!!!");
   };
   ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
  
# Using Controllers

- Any post request we want to handle we will give the responsibility to the Controllers instead of handling everything inside   the routes.  
  &nbsp;  
  <b>In app.js</b>  
  &nbsp;  
  ```ruby
  const express = require("express");
  const app = express();
  const morgan = require("morgan");

  const postRoutes = require("./routes/post");

  app.use(morgan("dev"));

  app.use("/", postRoutes);

  const port = 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```
  <b>In controllers/post.js</b>  
   &nbsp; 
   ```ruby
   exports.getPosts = (req, res) => {
      res.send("Hello World!!!");
   };
   ```
  <b>In routes/post.js</b>  
   &nbsp;  
   ```ruby
   const express = require("express");
   const postController = require("../controllers/post");

   const router = express.Router();

   router.get("/", postController.getPosts);

   module.exports = router;
   ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```

# JSON

- JSON stands for JavaScript Object Notation
- It is a lightweight format for storing and transporting data
- It is often used when data is sent from a server to a web page
- Note: Install Json Viewer extension in google chrome for seeing the json Format in Structured way.  
  &nbsp;  
  <b>In controllers/post.js</b>  
  &nbsp;  
  ```ruby
   exports.getPosts = (req, res) => {
    res.json({
      posts: [
        { title: 'Android' },
        { title: 'Flutter' }
      ]
    });
    };
   ```  
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
   
# Postman
 
- Postman is an API(application programming interface) development tool which helps to build, test and modify APIs.
- Visit, https://www.postman.com/downloads/
- Read the documentation and install the app.
 
# Mongo db

- MongoDB is a document-oriented NoSQL database used for high volume data storage. 
- Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. - Documents consist of key-value pairs which are the basic unit of data in MongoDB.
- Visit, https://www.mongodb.com/ -> Read the documentation and create the account.
- Create the New Cluster, Database Access and Network Access.
- Clutser -> connect -> connect your application and copy the connection String.
- Visit, https://robomongo.org/ -> Robo 3T -> which gives you the visual representation of the database.
- To Access the enviroment variable files(i.e).env files  
  &nbsp;   
  ```ruby
  npm i dotenv
  ```
- To work with database there is a package called mongoose.
- To install mongoose, In the Terminal  
   &nbsp;   
    ```ruby
    npm i mongoose
    ```
  <b>In app.js</b>  
  &nbsp;  
  ```ruby
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const morgan = require("morgan");
  const dotenv = require("dotenv");
  dotenv.config();

  mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))

  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  })

  const postRoutes = require("./routes/post");

  app.use(morgan("dev"));

  app.use("/", postRoutes);

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```
  <b>In controllers/post.js</b>  
   &nbsp; 
   ```ruby
   exports.getPosts = (req, res) => {
    res.json({
      posts: [
        { title: 'Android' },
        { title: 'Flutter' }
      ]
    });
    };
   ```
  <b>In routes/post.js</b>  
   &nbsp; 
  ```ruby
  const express = require("express");
  const postController = require("../controllers/post");

  const router = express.Router();

  router.get("/", postController.getPosts);

  module.exports = router;
  ```
  <b>In .env</b>  
   &nbsp; 
  ```ruby
  MONGO_URI=mongodb+srv://name:password@cluster0-ou1fj.mongodb.net/test?retryWrites=true&w=majority
  PORT=8080
  ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```

 
# How to Install MongoDB on Mac

- Visit, https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
- Follow the Documentation
- Visit, https://brew.sh/#install -> Install Homebrew using the command Line
- To check the version, In the Terminal  
   &nbsp;   
    ```ruby
    brew --version
    ```
- Tap the MongoDB Homebrew Tap and issue the following line,  
  &nbsp;   
    ```ruby
    brew tap mongodb/brew
    ```
- To install MongoDB Community Edition using the third-party brew package manager, issue the following line,  
  &nbsp;   
    ```ruby
    brew install mongodb-community@4.2
    ```
- To run MongoDB (i.e. the mongod process) manually as a background process, issue the following line,  
  &nbsp;   
    ```ruby
    mongod --config /usr/local/etc/mongod.conf --fork
    ```
- Now Go to file -> shell -> New Tab and issue the following line,  
  &nbsp;   
    ```ruby
    mongo
    ```
- To check the version,  
 &nbsp;   
    ```ruby
    db.version()
    ```
- To exit, click -> cntrl+c (or)issue the following line,  
  &nbsp;   
    ```ruby
    quit()
    ```
- Alternative way, To run MongoDB (i.e. the mongod process) as a macOS service, issue the following line,  
  &nbsp;   
    ```ruby
    brew services start mongodb-community@4.2
    ```
- To stop a mongod running as a macOS service, issue the following line,  
  &nbsp;   
    ```ruby
    brew services stop mongodb-community@4.2
    ```
    
# Post Schema

- By Now, we have created routes, controllers and finally, we need to create the models.
- models is mainly help us to communicate with the database.  
  &nbsp;  
  <b>In models/post.js</b>  
   &nbsp;  
   ```ruby
   const mongoose = require("mongoose");

   const postSchema = new mongoose.Schema({
     title: {
       type: String,
       required: "Title is required",
       minlength: 4,
       maxlength: 150
     },
     body: {
       type: String,
       required: "Body is required",
       minlength: 4,
       maxlength: 2000
     }
   });

   module.exports = mongoose.model("Post", postSchema);
   ```
   
# Creating a post
  &nbsp; 
  <b>In app.js</b>  
  ```ruby
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const morgan = require("morgan");
  const dotenv = require("dotenv");
  dotenv.config();

  // MONGO_URI=mongodb://localhost/node-api 
  mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))

  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  })

  const postRoutes = require("./routes/post");

  app.use(morgan("dev"));

  app.use("/", postRoutes);

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```  
  <b>In controllers/post.js</b>  
   ```ruby
   const Post = require('../models/post')

  exports.getPosts = (req, res) => {
    res.json({
      posts: [
        { title: 'Android' },
        { title: 'Flutter' }
      ]
    });
  };

  exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log("Creating POST:", post);
  }
   ```  
  <b>In models/post.js</b>   
  ```ruby
  const mongoose = require("mongoose");

  const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: "Title is required",
      minlength: 4,
      maxlength: 150
    },
    body: {
      type: String,
      required: "Body is required",
      minlength: 4,
      maxlength: 2000
    }
  });

  module.exports = mongoose.model("Post", postSchema);
  ```  
  <b>In routes/post.js</b>   
  ```ruby
  const express = require("express");
  const postController = require("../controllers/post");

  const router = express.Router();

  router.get("/", postController.getPosts);
  router.post("/post", postController.createPost);

  module.exports = router;
  ```  
  <b>In .env</b>  
  ```ruby
  MONGO_URI=mongodb+srv://name:password@cluster0-ou1fj.mongodb.net/test?retryWrites=true&w=majority
  PORT=8080
  ```
- Now, using the postman tool  
  &nbsp;   
  ```ruby
  {
	"title": "This is a new post",
	"body": "This is a body"
  }
  ```
- Now, you can check by running the terminal as,  
  &nbsp;   
  ```ruby
  npm run dev
  ```
- Now, at the terminal you will get an unique ID due to using Mongo db.  
  &nbsp;   
  ```ruby
  Creating POST: { _id: 5e9ec3b43e606f0273b87b6f }
  ```
- Now, We are going to install body parser by using the command line,  
  &nbsp;   
  ```ruby
  npm i body-parser
  ```
- body parser is used to read the request and make it in json Format.

  <b>Now, In app.js</b>  
  ```ruby
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const morgan = require("morgan");
  const dotenv = require("dotenv");
  const bodyParser = require("body-parser");
  dotenv.config();

  // MONGO_URI=mongodb://localhost/node-api 
  mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))

  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  })

  const postRoutes = require("./routes/post");

  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use("/", postRoutes);

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```
  <b>In controllers/post.js</b>  
  ```ruby
   const Post = require("../models/post");

   exports.getPosts = (req, res) => {
   res.json({
      posts: [{ title: "Android" }, { title: "Flutter" }]
   });
  };

  exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Creating POST:", req.body);
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }

      res.status(200).json({
        post: result
      });
    });
  };
  ```
- Now, using the postman tool  
  ```ruby
  {
	"title": "This is a new post",
	"body": "This is a body"
  }
  ```
- Finally, you will get the response,   
  ```ruby
  {
    "post": {
        "_id": "5e9ec822261fc802a701938b",
        "title": "This is a new post",
        "body": "This is a body",
        "__v": 0
    }
  }
  ```
- You can also, check there at the mongoDB.Atlas in collections

# Validation and Error Messages

- For Handling Errors, we will use the package nanmed express-validator.
  ```ruby
  npm i express-validator@5.3.1
  ```
- While using version 6, you will encounter the following error(i.e) TypeError: expressValidator is not a function.
- To avoid this issue you can use the previous version which is 5.3.1  
  &nbsp;   
  <b>Now, In app.js</b>  
  &nbsp;   
  ```ruby
  const express = require("express");
  const app = express();
  const mongoose = require("mongoose");
  const morgan = require("morgan");
  const dotenv = require("dotenv");
  const expressValidator = require("express-validator");
  const bodyParser = require("body-parser");
  dotenv.config();

  // MONGO_URI=mongodb://localhost/node-api 
  mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))

  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  })

  const postRoutes = require("./routes/post");

  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use("/", postRoutes);

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Node js Api is Listening on port: ${port}`);
  });
  ```
  <b>In controllers/post.js</b>   
  &nbsp;   
  ```ruby
  const Post = require("../models/post");

  exports.getPosts = (req, res) => {
  res.json({
      posts: [{ title: "Android" }, { title: "Flutter" }]
    });
  };

  exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
      res.status(200).json({
        post: result
      });
    });
  };
  ```
  <b>In models/post.js</b>  
  &nbsp;   
  ```ruby
  const mongoose = require("mongoose");

  const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model("Post", postSchema);
  ```
  <b>In routes/post.js</b>  
  &nbsp;   
  ```ruby
  const express = require("express");
  const postController = require("../controllers/post");
  const validator = require('../validators/index')

  const router = express.Router();

  router.get("/", postController.getPosts);
  router.post("/post", validator.createPostValidator, postController.createPost);

  module.exports = router;
  ```
  <b>In validators/index.js</b>  
  &nbsp;   
  ```ruby
  exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', 'Write a title').notEmpty()
    req.check('title', 'Title must be between 4 to 10 characters').isLength({
        min: 4,
        max: 150
    });

    // body
    req.check('body', 'Write a body').notEmpty()
    req.check('body', 'Body must be between 4 to 2000 characters').isLength({
        min: 4,
        max: 2000
    });

    // check for errors
    const errors = req.validationErrors()
    // if error occurs shows the first one as they happen
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }
    // proceed to next middleware
    next();
  }
  ```
  <b>In .env</b>  
  &nbsp;   
  ```ruby
  MONGO_URI=mongodb+srv://name:password@cluster0-ou1fj.mongodb.net/test?retryWrites=true&w=majority
  PORT=8080
  ```
- Now, using the postman tool  
  &nbsp;   
  ```ruby
  {
	"title": "Thi",
	"body": "This is a body"
  }
  ```
- Finally, you will get the response,   
  &nbsp;   
  ```ruby
  {
    "error": "Title must be between 4 to 10 characters"
  }
  ```
- You can also, check there at the mongoDB.Atlas in collections

# Getting Post

- We are getting all the datas from the database and display it to the users.  
  &nbsp;   
  <b>In controllers/post.js</b>   
  &nbsp;   
  ```ruby
  const Post = require("../models/post");

  exports.getPosts = (req, res) => {
    const posts = Post.find()
    .then((posts) => {
      res.status(200).json({posts: posts})
    })
    .catch(err => console.log(err))
  };

  exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
      res.status(200).json({
        post: result
      });
    });
  };
  ```
  
# Code Refractor

- We can do code Optimization of the above code as mentioned below,  
  &nbsp;   
  <b>In controllers/post.js</b>   
  &nbsp;   
  ```ruby
  const Post = require("../models/post");

  exports.getPosts = (req, res) => {
    const posts = Post.find()
    .select("_id title body")
    .then((posts) => {
      res.json({posts})
    })
    .catch(err => console.log(err))
  };

  exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then(result => {
      res.json({
        post: result
      });
    });
  };
  ```
  <b>In routes/post.js</b>  
  &nbsp;   
  ```ruby
  const express = require("express");
  const { getPosts, createPost} = require("../controllers/post");
  const validator = require('../validators/index')

  const router = express.Router();

  router.get("/", getPosts);
  router.post("/post", validator.createPostValidator, createPost);

  module.exports = router;
  ```

# Points to get Remember

- Whenever you are opening an existing Application, you have to install the npm package using,  
  &nbsp;   
  ```ruby
  npm install
  ```
