// const express = require('express');
// const server = express();

// // Complete your server here!
// // Do NOT `server.listen()` inside this file!

// module.exports = server;


const express = require('express');

const actionRouter = require('./actions/actions-router');
const projectRouter = require('./projects/projects-model');

const server = express();

server.use(express.json())
server.use(logger);

server.use("/action", actionRouter );
server.use("/project", projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some functioning middleware this time!</h2>`);
  });

  function logger(req, res, next) {
    console.log(req.method);
     console.log(req.url);
    console.log(Date.now());
    next();
    }

    module.exports = server;