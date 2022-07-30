# Avatar Picker Component

Link: https://capable-paletas-efd6c6.netlify.app/

![](demo.gif)

This is going to be a react component which is being passed just one property: the list of available `avatars`. This list contains the src of the image file, the avatar label and a unique avatar id. The number of avatars can vary (let's say up to 12). For this example please use the following array:
```js
[
  { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "images/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "images/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "images/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "images/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "images/avatar6.png", "label": "Avatar 6", "id": 6 }
]
```
Avatar images are located under `/public` folder.

### Design and behaviour:
- The initially shown avatar is the first in the given list of avatars
- The initial avatar which opens the popover has a border of 1px on hover and active state
- The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
- The popover opens with a scaling animation that overbounces a bit (see gif; you're free to choose values for the animation that look good in your opinion, or close to what you see above)
- The currently chosen avatar has a blue border of 3px
- A click outside the popover area will result in the popover closing
- Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
- The popover is closed when an avatar is chosen

### Note
- You're NOT allowed to use any third party CSS libraries


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
