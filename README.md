# URLshortner_ACM

URL Shortener is a web application that allows you to shorten long URLs into shorter, more manageable links. It is built using Node.js, Express, and MongoDB.

## Features

- Shorten long URLs into shortened links
- Track the number of clicks on each shortened link
- Search functionality to find links based on their titles
- Saves the data of title, short URL, and full URL on the frontend
- Connected to MongoDB to store user data and enable the search functionality using the "title" field

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based database)

## Usage

1. Access the URL Shortener application in your web browser at http://localhost:5000
2. Enter a title and the URL you want to shorten in the provided input fields
3. Click the "SHORTEN" button to generate a shortened link
4. The shortened link will be displayed in the table along with the original URL and the number of clicks
5. Use the search bar at the top to search for links based on their titles.
   
## Insatallation 
1. Need to open all the files in vs code or other ide .
2. Download in termainal: mongoose ,express,nodemon ,nodemodules -by using " npm init "
3. Connect the files with live server as in case i used localhost:5000
4. For functioning of the site run "npm run devStart" in terminal.
5. Now the site is ready to go which uses the mongodb for data collection and search functionality .
