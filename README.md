# Revelio

The project is a SPA chat that was written for React practice.  
It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).  
In order to run it locally, you will have to initialize the Firebase database with your config.  
To do this, replace the `revelio/src/firebase/init.js` file with yours.

## Tech stack

- React
- React router
- Firebase DB

## Folder Structure

```
revelio/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
    firebase/
    router/
    views/
    App.css
    App.js
    index.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies in the local node_modules folder.

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles app in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.
