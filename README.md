# follow-my-lead
## Partnering people to pooch // with pups //pooches? 

<p> Sometimes dog owners don't have time to walk their dogs and sometimes people who love dogs can't own one :( </p>

<p> FollowMyLead is an app that connects the people in local communities to find or walk man's best friend :)
The idea is to allow dog lovers to find a compatable dog via a list of profiles which are registered from dog owners. </p>

<p> It is our intent to provide a platform where dogs can get their regular excersise and people who love dogs can walk them. </p>


## TECH

* GitHub, Git
* BoilerPlate
* React
* React-Router
* Express
* Knex.js (SQLite3)
* CSS
* JWT Auth (Local) - Authenticare
* Internal API

## User Stories & MVP

### As a user:

* I want to be able to see a home page which will display a title, login/register and blurb.

### As a walker:

* I want to register for the App
* I want to be able to sign in to the App with my login and password
* I want to be able to view a list of dogs I can potentially take for a walk
* I want to be able to notify the owner that I am interested in their pet by click of a button - this will send an email.

### Stretch Walker:

* I want to be selective in my dog search by filtering location of available of dogs in the doglist
* I want to be able to leave feedback on the pup on the puppy profile page
* I want to reset my password if I forget my password
* I want to be able to review, edit and delete my profile upon registration and for future purposes(eg update photo or contact details)
* I want to be able to view and leave feedback on the puppy's profile page
* I want to be informed if declined

### As an Owner:

* I want to register myself for the App
* I want to register my dog/dogs for the App.
* I want to be able to sign in to the App with my login and password
* I want to be able to receive an email from a potential walker which will include a link to their profile
* I want to be able to view the walker that has requested to walk my dog vai a link which will be sent by email.
* I want to be able to send a confirmation of acceptance or rejection (acceptance will open a line of communication via email)

### Stretch Owner:

* I want to be able to leave feedback on the walker profile page
* I want to be able to accept or decline a walker by button on app
* I want to reset my password if I forget my password
* I want to be able to review, edit and delete my profile as well as dogs profile upon registration and for future purposes(eg update photo or contact details)

## Views (Client Side)

| name           | purpose                                                                                |
|----------------|----------------------------------------------------------------------------------------|
| Home           | Default page displaying login, register for walker and owner as well as include a blurb|
|----------------|----------------------------------------------------------------------------------------|
| Register       | View for user to sign up for the App                                                   |
|----------------|----------------------------------------------------------------------------------------|
| Login	         | View for user to enter their login credentials                                         |
|----------------|----------------------------------------------------------------------------------------|
| Walker Profile | Will link to the DogList component // feedback section                                 |
|----------------|----------------------------------------------------------------------------------------|
| Owner Profile  | Save dog/dogs details (conditionally render the component of register dog if true)     |
|----------------|----------------------------------------------------------------------------------------|
| Dog profile    | Will display the dog to walkers and a button to "Walkies?" which notify the owner and  | 
|                | then redirect the walker to the DogList component// comments/feedback section          |
|----------------|----------------------------------------------------------------------------------------|
| DogRegistration| Form to populate the dog data and add to Owners profile - this will include dog name.  |
|----------------|----------------------------------------------------------------------------------------|
| DogList        | Will display dog profiles to the walker - this will include dog name.                  |
|----------------|----------------------------------------------------------------------------------------|


## Stretch

| Name.          | Purpose                                                                                |
|----------------|----------------------------------------------------------------------------------------|
| Feedback View  | Will display upon click a link that will be sent after confirmation of walk            |
|----------------|----------------------------------------------------------------------------------------|


## API (Client - Server)

| Type | Endpoint                 |  Usage reponse                                                            |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/auth/login          | Login as a user using JWT Token                                           |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/auth/register	      | Register a user with JWT Token                                            |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/walker/:id	        | Display the walker profile - returns a walker object                      |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/doglist             | Displays list of dogs - return and array of dog objects                   |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/dogs/:id            | Display the selected dog profile - returns a dog object.                  | 
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/owner/              | Display a list of owners - returns an array of owner objects              |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/owner/:id           | Display an owners - returns an owner objects                              |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/owner/:id/dogs.     | Return a list of the onwers dogs                                          |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/feedback/dog/:id    | Insert feedback comment and match to dog id using join table.             |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/feedback/walker/:id | (Yes) insert feedback comment and match to walker id using join table.    |
|------|--------------------------|---------------------------------------------------------------------------|

## DB (Server Side)

### dogs

| col_name               | variable type                        |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| owner_id               | integer.                             |
|------------------------|--------------------------------------|
| feedback_id            | integer                              |
|------------------------|--------------------------------------|
| name                   | string                               |
|------------------------|--------------------------------------|
| breed                  | string                               |
|------------------------|--------------------------------------|
| sex                    | string                               |
|------------------------|--------------------------------------|
| age                    | string // with radio buttons         |
|------------------------|--------------------------------------|
| size                   | string // with radio buttons         |
|------------------------|--------------------------------------|
| acitivity_requirements | string // with radio buttons         |
|------------------------|--------------------------------------|
| good_with_other_dogs   | boolean // radio buttons - yes or no |
|------------------------|--------------------------------------|
| special_requirements   | string //text-field                  |
|------------------------|--------------------------------------|
| photo.                 | string                               |
|------------------------|--------------------------------------|
| vet_name               | string                               |
|------------------------|--------------------------------------|
| vet_contact            | interger                             |
|------------------------|--------------------------------------|


### walkers

| col_name               |                                      |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| feedback_id            | integer                              |
|------------------------|--------------------------------------|
| first_name             | string                               |
|------------------------|--------------------------------------|
| last_name              | string                               |
|------------------------|--------------------------------------|
| blurb                  | string                               |
|------------------------|--------------------------------------|
| location               | string // with dropdown table        |
|------------------------|--------------------------------------|
| email                  | string                               |
|------------------------|--------------------------------------|
| hash                   | string                               |
|------------------------|--------------------------------------|
| photo                  | string                               |
|------------------------|--------------------------------------|


### owners

| col_name               | variable type                        |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| feedback_id            | integer                              |
|------------------------|--------------------------------------|
| first_name             | string                               |
|------------------------|--------------------------------------|
| last_name              | string                               |
|------------------------|--------------------------------------|
| photo                  | string                               |
|------------------------|--------------------------------------|
| location               | string // with dropdown table        |
|------------------------|--------------------------------------|
| email                  | string                               |
|------------------------|--------------------------------------|
| hash                   | string                               |
|------------------------|--------------------------------------|
| photo                  | string                               |
|------------------------|--------------------------------------|


### user_table

| col_name               | variable type                        |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| username.              | string	                        |
|------------------------|--------------------------------------|
| password               | string	                        |
|------------------------|--------------------------------------|


### dog_feedback_table

| col_name               | variable type                        |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| feedback               | string                               |
|------------------------|--------------------------------------|
| emoji.                 | string                               |
|------------------------|--------------------------------------|



### walker_feedback_table

| col_name               | variable type                        |
|------------------------|--------------------------------------|
| id                     | increments.                          |
|------------------------|--------------------------------------|
| feedback               | string                               |
|------------------------|--------------------------------------|
| emoji.                 | string                               |
|------------------------|--------------------------------------|


## DB Functions

* getPuppy's
* getPuppy
* getWalker
* getOwner


* getPuppyFeedback
* getWalkerFeedback
* postPuppyFeedback
* postWalkerFeedback


## ROLES

* Product Owner - Seb
* Scrum Master - Scott
* Vibes Master - Izzy
* Git Master - Rich
* Name Master - Josh
* Fun Master - Lui


## GitFlow

* Master - deployment (MVP)
* Dev - which will take finished features prior to completion
* homeBranch includes header and footer
* authBranch
* LoginBranch
* registerBranch general registration, owner registration, walker registration
* walkerBranch walker profile with edit, delete profile buttons as well as view doglist button
* ownerBranch - edit/delete addDog/deleteDog/editDog button as well as a view my dog which will render your selected dog profile
* dogRegisterBranch which is a form and submit of the details in the seeds
* DogListBranch will display a list of dogs and will render a dog component
* dogBranch
* retrieveDogDataBranch
* retrieveDogFeedbackBranch
* retrieveOwnerDataBranch
* retrieveWalkerDataBranch
* retrieveWalkerFeedback
* serverAPIBranch




