# React-Native
E-commerce App

- React Native Environment Setup (https://reactnative.dev/docs/environment-setup).

- Understanding Components (Class vs Functional)
   * this.state, this.props and this.setState in React and how they will be achieved in functional components.
   * Life cycle methods
   * JS Fetch/Axios for calling APIs

- Understanding ES6 and Advanced Javascript 
   * arrays and array manipulation, objects and object manipulation, map/reduce/filter, rest/spread operators, functional programming, fat arrow functions, and  let/const/var difference.

- Create a React Native app using the  React Native CLI (or react-native init).

- Go through the basic components of React native, add the basic components in the app and make sure each component works as expected.

- Go through the React Navigation documents and get clarity on screen navigation.

- To ensure the Auth flow, add a login screen that includes the following components:
	- SKIP button (to skip the login).
	- TextInputField(For user email address).
- LOGIN button( to login the app).

- Add Home screen to ensure the App flow and Show the Home screen Text in the center of the screen.

- Handle the navigation from login to Home screen and add validation to the email field.

- Implement Stack, Tab and Drawer Navigators.

- Include Tab screens
   * Add tab icons and names.
   * The screen name should appear in the center of the screen as well as in the header.
   * Header title should be updated with the screen name while switching between the tabs.

- Add a Hamburger Menu icon on the left side of the header and add a search icon on the right side of the header.

- Enable the tap event for the header icons
   * Open the drawer while tapping on the Hamburger Menu.
   * The Email address should be shown on the top of the drawer after the “Hi, ” prefix.
   * If the user skips the login then “Hi, Guest” should be shown on the top of the drawer instead of the email address.
   * Dummy user icon should be shown in the middle of the drawer. 
   * Navigate to the new search screen while tapping on the search icon.
   * Create a dummy search screen with the text input field with a back button.

- Handle the user’s session
   * Implement Logout in the Drawer menu.
   * Redirect with back to be restricted from home screen to initial screen(login) and maintain the user / guest session after quitting the app.

- E-commerce app
   * Add an Image banner with the equal size of Header on the top of the home screen(1st tab).
   * Create any type of product list after the image banner. Product list items should contain an image,title,description and price.
   * Add multiple horizontal  product lists using the section list on the 2nd tab screen.
   * Display the content of both screens (1st and 2nd tab screens) using static data.

- Understanding Redux with React
   * Redux-Thunk
   * Redux-Saga

- Implementing Redux-Saga in app
   * Use any sample API(Ex: https://fakestoreapi.com/docs) and populate the response data with the screen components.

 - Folder structure should follow the Atomic pattern.
