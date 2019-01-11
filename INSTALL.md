# Installation

This repository is set-up to house both the front-end and back-end code necessary to run Cricket.
As such, installation has several steps can requires several components.

This application was built following the MEAN (MongoDB, Express, Angular, Node.js) framework.

Additionally, due to the numerous ways servers can be set-up, this application has not been explicitly tested on all of them. This installation guide provides instructions on how to get up-and-running using the set-up that has worked for. Changes may need to be made to accomodate your system.

## MongoDB

The database used by the application is [MongoDB](https://www.mongodb.com/what-is-mongodb). This is a no-sql database where each record is stored as a file.
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
3. (If not already), clone this repository into a location accessible to the web, let's call it *inherit-logic*
4. In the new `inherit-logic` directory, run `yarn install --prod` (for production builds) or `yarn install` for development/local build. If you do not have yarn installed, run npm install.
5. Run unit tests to test the installation.
  - ` yarn run test:server` tests server-side (Express.js) code
  - `yarn run test:ng` tests client-side (Angular) code

## Configure
1. In the `config` folder, copy the file `env.production.public.js` and rename to `env.production.js`. Edit to be applicable to your instance.
  - `db`: MongoDB instance including username/password if necessary
  - `sessionSecret`: used for expression session encryption; set as unique string or use enviroment variable
  - `encodeKey`: used to encrypt/decrypt genotypes so they aren't visible on the front-end; set as unique string or use environment variable
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

## Initialize the database
1. Open the mongo terminal by running `mongo`.
2. Run `use db`, replacing *db* with the name of the MongoDB database specified in configuration above
3. Create the default course.
  1. Run
```
db.courses.insert({courseNum: "NA", courseDescription: "default course"})
```
  2. If this worked you'll get the response `WriteResult({ "nInserted" : 1 })`.
  3. Run `db.courses.find({})` to get the course object ID `"_id":ObjectId("...")`
4. Create first admin user.
  1. Run the following command, replacing *firstName*, *lastName*, and *email* with your information and use the course object ID found from above. **Do not change the password at this time!**
  ```
db.users.insert({firstName:"First", lastName:"Last", email:"test@email.com", "course": ObjectId("..."), password: "$2a$10$/JljmqqPzF3TY810mSd5oOVJhhcLB7tLv8.BHFJh8MvGPcDaxAerK", accessGranted:{ "WTorMute":false, "ThreeOther":false, "SameOrDiff1":false, "OneEach":false, "WhoMiddle":false, "CombineTwo":false, "MapDelete":false, "ProveCode":false, "FindStop":false, "SameOrDiff2":false, "HowMany":false }, userId: 1, role: "admin"})
  ```
  2. If it worked, you'll get the response `WriteResult({ "nInserted" : 1 })`.
  3. You can double check the user was created by running `db.users.find({})` and you'll see the new user.
5. This user information/password will need to be changed upon first log-in. See below.
6. Exit MongoDB by running `exit`

## Build and Deploy
1. Run `yarn run build` to build the client-side code for production.
2. Deployment will depend on the server set-up. We use [Phusion Passenger]() and it works well. This [walkthrough](https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/) will help you deploy Cricket based on your sever configurations. Note that the *startup file* is `index.js`.
3. You can also run Cricket locally with `yarn run start:p` to run in production mode. Go to `http://localhost:3001/`

## Installation Clean-Up
**IMPORTANT**
When running the application the first time, login as the user you created directly in the database.

1. Use the email you specified and `password` as the password.
2. Navigate to the user profile--the profile icon in the navigation bar
3. Update password, entering `password` as the old password and make the new password a unique, secure password.

If you've verified that Nodemailer is functional, you can also reset your password by navigating to the sign-in page and following the instructions for `Forget password?`
