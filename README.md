# Project Overview

Climate Data Dashboard is a tool for science teachers and students to promote data analysis and productive discussion about data. As a middle school teacher, I was always trying to help my students to examine and compare data across multiple sources. My students needed more practice making observations about the data, as well as generating questions about the data to guide further inquiry. As a teacher, I struggled to find and present appropriate data sources. The Data Climate Dashboard addresses all of these challenges by providing a collection of data sources that can displayed together, and providing opportunities for students to interact with the data as well as interact with the ideas of their classmates, which drives discussion and further inquiry.

This project was created with a Ruby on Rails backend API which manages all of the teacher and student data related to the charts and observations (notices) and questions (or wonders). The frontend was created as a React-Redux application using React-Router to manage RESTful routing and Thunk to manage asynchronous fetch actions.

![Imgur](https://i.imgur.com/Hqz3QMC.png)

## Resources and Links

Frontend Repository: https://github.com/jessesbyers/climate-data-dashboard-frontend
Backend Repository: https://github.com/jessesbyers/climate-data-dashboard-backend
Blog Post: https://jessesbyers.github.io/climate_data_dashboard_react-redux_project
Video Walkthrough: https://drive.google.com/file/d/1IVsYRaElQui7Se3lXT8yAWIy3wBS149a/view

*This project was inspired by the NOAA climate.gov Global Climate Dashboard. All charts resources included in the seeds file were retrieved from this interactive site: https://www.climate.gov/maps-data#global-climate-dashboard 


## Getting Started

1. Fork and clone the frontend and backend repositories:
    $ git clone https://github.com/jessesbyers/climate-data-dashboard-backend
    $ git clone https://github.com/jessesbyers/climate-data-dashboard-frontend

2. Navigate to the root directory of each repo:
    $ cd climate-data-dashboard-backend
    $ cd climate-data-dashboard-frontend

3. Launch the rails server from the backend directory and navigate to localhost:3000 in the browser:
    $ rails s

4. Launch the react server from the frontend directory and navigate to the appropriate url in the browser (for example, localhost:3001).
    $ npm start


## Navigating the App

Watch the Video Walkthrough: https://drive.google.com/file/d/1IVsYRaElQui7Se3lXT8yAWIy3wBS149a/view

Click on the Data Dashboard button in the NavBar to access the home page, where you are able to load multiple charts onto the Data Dashboard, as well as clear charts from the dashboard.

Once a chart is loaded onto the dashboard, click Interact to add your refections about the chart: Notices are observations about the data, and Wonders are questions about the data. After confirming your entries, click to View all Reflections.

From the Dashboard, click Reflections to see all reflections added about an individual chart. Click agree or disagree to interact with the reflections, or click on the X to delete the reflection.

Click on the Add a New Data Source button on the NavBar to enter new data sources. You will need to enter a name, URL for the data source, and a url for an image of the data representation.





