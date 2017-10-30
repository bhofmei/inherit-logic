# TO DO

## Models
- [ ] fridge
- [ ] phage
- [X] scenerios
  - [X] prefill info
- [ ] users
  - [ ] add course info

## Controllers
### URL controllers
- [ ] fridge
  - [ ] GET methods
    - [ ] get scenario fridge
  - [ ] POST methods
    - [ ] save scenario fridge
- [ ] phage
- [ ] scenerios
  - [ ] GET methods
    - [X] list of scenarios
    - [ ] list of scenarios by course
    - [ ] specific scenario
- [ ] user
  - [ ] GET methods
    - [X] sign out
    - [ ] profile page
  - [ ] POST methods
    - [X] sign up
    - [X] sign in
    - [ ] update profile
- [ ] course
  - [ ] GET methods
    - [ ] get scenario list for course
  - [ ] POST methods
    - [ ] update scenario list for course
  - [ ] DELETE methods
    - [ ] delete course and all info

### Genetics logic controllers
  - [ ] generate phage
  - [ ] perform cross
  - [ ] get genotype

## Routes
- [ ] scenarios/fridge
- [ ] user
  - [ ] update profile
  
## Modules
### Navigation/Header
  - [X] logo
  - [ ] links
### Home
  - [ ] Scenerio list
    - [ ] text
    - [ ] style
  - [ ] Scenario info
    - [ ] text
    - [ ] style

### Solve Scenarios
  - [ ] nav between lab, plexer, model
    - [ ] only allowed by scenario
  - [ ] scenario description
    - [ ] text
    - [ ] "get started" button to default location
    - [ ] style
  - [ ] fridge component
#### Fridge
  - [ ] shelf
    - [ ] organization
    - [ ] drag and drop
    - [ ] style
  - [ ] phage
    - [ ] add phage by drag
    - [ ] remove phage
  - [ ] navigate-shelf
    - [ ] add shelf
    - [ ] move to shelf
#### Lab room
  - [ ] diluation tubes
    - [ ] add solution by drag
    - [ ] remove solution by drag
    - [ ] adjustable dilution value
    - [ ] style
  - [ ] e. coli tubes
    - [ ] dilution value
    - [ ] add phage by drag
    - [ ] hide unused tube
    - [ ] remove solution by drag
    - [ ] style
  - [ ] plate
    - [ ] add solution
    - [ ] incubate
    - [ ] clear
    - [ ] select phage by click/drag
#### Plexer
  - [ ] data table
    - [ ] add phage by drag
    - [ ] incubate
#### Model
  - [] alignments

### Help Info

### User
  - [ ] Change name
  - [ ] Possible visualization settings
  - [ ] change password
  
### Admin/Course
  - [ ] admin only access
  - [ ] choose scenarios
  - [ ] list of users
    - [ ] promote to admin
    - [ ] forget password
## Tests
### Backend

### Angular

## Errors
(node:1293) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
[0] 10:00:52 AM - Compilation complete. Watching for file changes.

    