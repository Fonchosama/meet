# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Meet App

This app will be serverless and will use PWAs

# Features

## Filter events bt City
As a user,
I should be able to write the name of a city
so that I can select a city from a suggested list

Given: The user is browsing the main page.
When: The user enters the name of a city on the search box.
Then: The gets a list of cities with the name written.

---

## Show/Hide Event Details
As a user,
I should be able to click the buttons
So that I can see details of the event.

Given: The user is viewing the event details page.
When: The user clicks on a button to activate a function.
Then: The event details shows.

---

## Specify Number of Events
As a user,
I should be able to change the number of events
So that I can view that specific number of events on the page.

Given: The user is on the events page
When: The user put a number from a filter to see the amount of events displayed.
Then: The events listing showes the selected amount

---

## Use the App When Offline
As a user,
I sshould be able to use the app with no connection
So I can check the information of the saved events

Given: The user can use the app and save events
When: The user loses the internet connection.
Then: the previously viewed events still shows

---

## Add an App Shortcut to the Home Screen
As a user,
I should be able to have an option to add an app icon on the home screen.

Given: The user has installed the app on their phone
When: The user presses add shortcut button to home screen
Then: The app will be shown on the home screen.

---

## Display Charts Visualizing Event Details
As a user,
I should be able to click on a button
That shows the event details on a chart.

Given: The user is viewing the event list page.
When: The user taps on a "View Charts" button.
Then: A chart will render showing details of the event
