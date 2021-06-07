# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!-- Consider going through the following resources eventually -->

end-to-end tests
https://reactjs.org/docs/testing-environments.html#end-to-end-tests-aka-e2e-tests

<!--  -->

<!-- ✔️ ✖️ Z-Indexes ✖️ ✔️ -->

z-index:
0: default
1: side bar

<!--  -->


<!-- ✔️ ✖️ USE CASES ✖️ ✔️ -->

Login
    ├ ⎯ (done) As a User, I want to be able to login to the application using my Google credentials, so that login is fast and easy 
User
    ├ ⎯ As a User, I want to have a have a Dashboard to show active/approaching competitions, recent points/activities, bonuses
    ├ ⎯ As a User, I want to be able to see My Competitions (Separate Page)
    ├ ⎯ As a User, I want to be able to search for Competitions I could join (Separate Page)
Competitions
    ├ ⎯ Create Competitions
        ├ ⎯ (done) As a User, I want to be able to create a competition
        ├ ⎯ (done) As a User, when I create a competition, I want to be made admin
        ├ ⎯ As a User, when I create a competition, I want the option to join the competition as a participant as well, or just continue as Admin
        ├ ⎯ As a Dev, I want to allow a competition's start/end dates to be updated UNTIL the competition has been started
        ├ ⎯ As a User, when I start creating a competition, if I click outside of the create modal, I should be given a warning message that unsaved data may be lost
    ├ ⎯ Competition Admin Permissions
        ├ ⎯ (done) As a Competition Admin, I want the ability to set/update competition start/end dates
        ├ ⎯ As a Competition Admin, I want the ability to set/update point values for b/s/r
        ├ ⎯ As a Competition Admin, I want the ability to set/update competition type (individual vs team)
        ├ ⎯ As a Competition Admin, I want the ability to set/update the number of participants for my competition
        ├ ⎯ As a Competition Admin, I want the ability to make certain participants Admins for that competition
    ├ ⎯ Competition Admin Views
        ├ ⎯ (done) As a Competition Admin, I want the option to join my competition as a participant
        ├ ⎯ (done) As a Competition Admin and participant, I want to the option to view the competition in Admin View and in Participant View
    ├ ⎯ Join Competitions
        ├ ⎯ (done) As a User, I want the ability to join a public competition
        ├ ⎯ As a User, after I join a public competition, I want to be taken to the competition page
        ├ ⎯ As a User, I want the ability to request to join a private competition
    ├ ⎯ Leave Competitions
        ├ ⎯ As a User, I want the ability to leave an already joined competition
    ├ ⎯ Errors
        ├ ⎯ As a Dev, I want to display a "Competition not found" page when a user enters a URL with an invalid cid
Activities
    ├ ⎯ Importing Activities
        ├ ⎯ As a Dev, I want to import activities from Strava periodically, so the User does not have to manually import it every time they perform an activity
Error Messages
    ├ ⎯ Admin Page
            ├ ⎯ As a Dev, if a user is not a competition admin, I want to display a message saying access not allowed or something if a user tries to access the admin page
    ├ ⎯ Back End
            ├ ⎯ As a Dev, if the back end is down, I want to display some kind of "site down" message

Business POV
    ├ ⎯ As a PO, I want to allow users to purchase the premium version to allow more participants per competition (limit 50 before maybe), allow more competitions to be joined at once (limit 5 before maybe)
    ├ ⎯ As a PO, I want to give Users "Streak" awards, to incentivize Users to actively participate in their competitions
        ├ ⎯ Examples of potential Bonus awards: Days earning points in a row -> multiplier/bonus, team activity (a group does activities at the tsame time)

<!--  -->
