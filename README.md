## Functionalities
* Authentication local + JWT
* User can create a post
* User can delete his own post and update it
* User can follow another user’s post
* User gets a notification for a post made by a user he is following
* User can like a post
* User can see a list of all the positions he has liked

## Steps to build the blog.
* Setup the tools
*  express
*  babel
*  webpack 2
*  eslint
*  editorconfig

* Setup of the middleware and mongodb
  * add mongoose, body-parcer, morgan, compression, helmet
  * setup config folder
  * setup constants

* Users creation
  * create user model, controller and routes
  * add joi for validation with express-validation
* Add bcrypt and passport
  * crypt user password
  * create localStrategy with passport
  * can log a user
