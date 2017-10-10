![cf](https://i.imgur.com/7v5ASc8.png) 31: Async Actions
======


## Learning Objectives
* We will be able to create thunk based middleware for redux
* We will be able to create asynchronous action creators

## Requirements  
#### Configuration  

##### backend
* copy your cf-gram (or comparable) API into a directory labeled `backend`

##### frontend
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
* `src/style/main.scss`
* `src/style/lib`
  * `_vars.scss`
* `src/style/base`
  * `_base.scss`
  * `_reset.scss`
* `src/style/layout`
  * `_header.scss`
  * `_footer.scss`
  * `_content.scss`

#### Feature Tasks
* create a simple front end for your cf-gram (or comparable) API
  * you are only required to create CRUD operations for a single resource of your backend
  * **note:** be sure to remove auth from any routes that require it
* use the react/redux best practices we've learned to date
* add validation in your redux reducers
* add reporter and thunk middleware to your redux store
* create async action creators for making ajax request to your backend
* create sync action creators (regular action creators that return an object literal) for updating your app store


#### Problems:

problem:
Getting this error in terminal:
```
10 | let initialState = [];
11 |
> 12 | export default (state=initialState, action) => {
   | ^
13 |   let {payload, type}= action;
14 |   // this combines these two things into just action so we can be less explicit below
15 |
```
Answer:
I know it's because something is wrong with my babel, but haven't fixed it yet. 
