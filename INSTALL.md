# Installation

This repository is set-up to house both the front-end and back-end code necessary to run Cricket.
As such, installation has several steps can requires several components.

This application was built following the MEAN (MongoDB, Express, Angular, Node.js) framework.

Additionally, due to the numerous ways servers can be set-up, this application has not been explicitly tested on all of them. This installation guide provides instructions on how to get up-and-running using the set-up that has worked for. Changes may need to be made to accomodate your system.

## MongoDB

The database used by the application is [MongoDB](). This is a no-sql database where each record is stored as a file.
This gives the flexibility to be schema-less, however we use Mongoose define schema's making the code consistent and easier to debug.

Install MongoDB for your system. The most up-to-date version should suffice for the compatible Mongoose version.

MongoDB should be running as a background process at all times so data can be written to and read from the database.

## Express
Express acts as the go-between the front-end and back-end. 

## Angular
[Angular](https://angular.io/) is used to build the front-end of the application. This is the stuff the user sees. It involves using `Services` to interact with the server by retreativeing information from the DB server-size, then passing it to the front-end where it is rendered using Angular. Angular also handles url page navigations.

## Node.js
Web application framework. We use [yarn](https://yarnpkg.com/en/) to install packages, but [npm](https://www.npmjs.com/) also works.

## Installation Steps
1. Install Node.js from [Nodejs.org](https://nodejs.org/en/)
2. Install MongoDB from [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community)
  1. Check that MonogDB is working
  2. Set it up so MongoDB is always running
3. (If not already), clone this repository into a location acessible to the web, let's call it *cricket*
4. In the new `cricket` directory, run `yarn install --prod` (for production builds) or `yarn install` for development/local build. If you do not have yarn installed, run npm install.
5. Run unit tests to test the installation.
  - ` yarn run test:server` tests server-side (Express.js) code 
  - `yarn run test:ng` tests client-side (Angular) code 

## Configure
1. In the `config` folder, copy the file `env.production.public.js` and rename to `env.production.js`. Edit to be applicable to your instance.
  - `db`: MongoDB instance including username/password if necessary
  - `sessionSecret`: used for expression session encryption; set as unique string or use enviroment variable
  - `encodeKey`: used to encrypt/decrypt genotypes so they aren't visible on the front-end; set as unique string or use enviroment variable
  - `pathToKey`: full path to SSL key for HTTPS
  - `pathToCert`: full path to SSL certificate for HTTPS
2. In `credentials` folder:
  1. Copy `email.production.public.js` and rename as `email.production.js`.
    - See this [site](https://www.johnvincent.io/express-emails-gmail/) for information on how to fill out the fields if using a g-mail account.
    - This email is only used for user password resets. 
    - When user forgets password, email is set from this account to the user that allows them to set a new password.
  2. Copy `email.test.public.js` and rename as `email.test.js`.
    - This allows for unit-testing Nodemailer and password reset
    - I recommend using [Ethereal](https://ethereal.email/). Add `secure: false` under `port: 587`.
    
## Build and Deploy
1. Run `yarn run build` to build the client-side code for production.
2. Deployment will depend on the server set-up. We use [Phusion Passenger]() and it works well. This [walkthrough](https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/) will help you deploy Cricket based on your sever configurations. Note that the *startup file* is `index.js`.
3. You can also run Cricket locally with `yarn run start:p` to run in production mode. Go to `http://localhost:3001/`