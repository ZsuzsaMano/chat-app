## ideas for the app (might not have time for)
<ol>
  <li>login feature to select user name</li>
  <li>format date better, use moment.js to see how long ago was message sent</li>
  <li>Dark mode</li>  
  <li>Option to send img</li>
  <li>code of conduct on login page</li>
  <li>However I used code what has more than 90% support (source : canIuse) would still need to create fallback for IE </li>
</ol>

## my technology choices
 <strong>React  </strong> because it is my go to technology, and the one will be used at work.

 <strong>Sass  </strong> because it is modular and it makes it easier to reuse code. For example I always create a flex mixin.
Building up my own style-sheets and avoiding CSS frameworks gives me the opportunity to discover new properties and tricks.

Created  <strong>SVG </strong> elements using  <strong>Figma  </strong>in preparation for loader animation feature,

## What I would do differently next time

I would write more descriptive commits from the beginning.

## How I tackled the task
Started with separating components, and creating a style sheet for each of them.

<i>ChatBubble</i>: the area where the sent texts are appearing<br>
<i>Mainbox</i>: The main area what includes the ChatBubbles<br>
<i>Inputbar</i>: the form where user can type/send name and message<br>
<i>Loader</i>: animation showing up while messages loading

At the last interview I was advised to use Context for state management. However I haven't used it before, with the help of the documentation and a video guide,  got to set it up in a short time.  

Finally set up fetch to GET and POST data. Add some event-handlers.

 debug debug debug...

Before running to pick up kids from school, I still managed to add the feature of displaying own messages with another style.

Deployed it to Netlify and tested on different devices.

I spent about 5 hours today on the challange, and now maybe another hour on the README.md
***

## Sass autocompile

I use this to autocompile all styles into App.min.css
https://atom.io/packages/sass-autocompile


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
