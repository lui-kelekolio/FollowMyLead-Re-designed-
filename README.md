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
* JWT Auth (Local)
* Internal API
* Mobile first

## Stretch
* Moment.js
* React Native
* Google external API for geolocational
* CSS Tailwind framework

## User Stories & MVP

### As a user:

* I want to be able to see a home page which will display a title, login/register and blurb.
* I want to be able to view the FollowMyLead team in a team nav section.
* I want to reset my password if I forget my password :D


### As a walker:

* I want to register for the App
* I want to be able to sign in to the App with my login and password
* I want to be able to review, edit and delete my profile upon registration and for future purposes(eg update photo or contact details)
* I want to be able to view dogs in my area that I can potentially take for a walk
* I want to be selective in my preference of dog with filters, eg size, energy levels (not a grandma to a doberman)
* I want to be able to view puppy details and previous feedback on the puppy's profile page
* I want to be able to notify the owner that I am interested in their pet by click of a button.
* I want to be informed if I am accepted or declined from walking an owners dog
* I want to be able to leave feedback on the pup on the puppy profile page

### Stretch Walker:

* I want to be able to leave feedback on the pup after the walk has finished via a link.
* I want to be contactable via IM within the App
* I want to be abe to use geolocational tech to find walkers in my area at any given time. 
* I want to be able to filter times and dates of availability of dogs
* I want to be able to view dog individual profile at a time (think tinder) with swipe functionality
* I want to be able to receive tips 

### As an Owner:

* I want to register myself for the App
* I want to register my dog/dogs for the App.
* I want to be able to sign in to the App with my login and password
* I want to be able to review, edit and delete my profile as well as dogs profile upon registration and for future purposes(eg update photo or contact details)
* I want to be able to receive an email from a potential walker which will include a link to their profile
* I want to be able to accept or decline a walker by click of a button
* I want to be able to send a confirmation of acceptance or rejection (acceptance will open a line of communication via email)
* I want to be able to leave feedback on the walker profile page

### Stretch Owner:

* I want to be able to leave feedback on the walker after the walk has finished via a link.
* I want to be notified by app notification when a walker has chosen my dog which will display on my profile.
* I want to be able to contact walkers that have chosen my dog via IM.
* I want to be able to tip walkers.
* I want to be able to display times and dates of availablilty. 

## Views (Client Side)

| name           | purpose                                                                                |
|----------------|----------------------------------------------------------------------------------------|
| Home           | Default page displaying login, register and blurb                                      |
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
| DogList        | Will display dog profiles to the walker - this will include dog name.                  |
|----------------|----------------------------------------------------------------------------------------|


## Stretch

| Name.          | Purpose                                                                                |
|----------------|----------------------------------------------------------------------------------------|
| Feedback View  | Will display upon click a link that will be sent after confirmation of walk            |
|----------------|----------------------------------------------------------------------------------------|
| About the team | Will display us!                                                                       |
|----------------|----------------------------------------------------------------------------------------|
| Map View of NZ | Will be used to find and display nearby dogs to walk                                   |
|----------------|----------------------------------------------------------------------------------------|
| Schedule       | Will display a calendar of availability for the dog.. maybe walker?                    |
|----------------|----------------------------------------------------------------------------------------|


## API (Client - Server)

	Endpoint	Protected	Usage	Response

| Type | Endpoint                 |  Usage reponse                                                            |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/auth/login          | (Yes)	Log In a User	The Users JWT Token                                   |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/auth/register	      | (Yes)	Register a User	The Users JWT Token                                 |
|------|--------------------------|---------------------------------------------------------------------------|
| Get	 | /api/walker/:id	        |(Yes) display the walker profile - return a walker object                  |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/dogs                | (Yes) display the list of filtered dogs - return and array of dog objects |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/dogs/:id            | (Yes) display the selected dog profile - returns a dog object.            | 
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/owner/:id           | (Yes) display an owners profile - returns one owner object                |
|------|--------------------------|---------------------------------------------------------------------------|
| Get  | /api/owner/:id/dogs.     | (Yes) return the list of the onwers dogs                                  |
|------|--------------------------|---------------------------------------------------------------------------|
| Post | /api/feedback/dog/:id    | (Yes) insert feedback comment and match to dog id using join table.       |
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




