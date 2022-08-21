---
title: "Web App: Canna"
date: "August 12, 2022"
exerpt: "Coding Temple Capstone"
cover_image: "/images/posts/dev/canna/CannaThumbnail.png"
link: "https://canna-projects.herokuapp.com"
---

### View the full application here → [Canna Projects](https://canna-projects.herokuapp.com).

This project was build out of need that I found in my 100,000 other hobbies, particularly sewing, art, and other project-based creative endeavors. Almost no project is one thing, so I wanted something to help me stay more organized.

The challenge from Coding Temple was to create an application that could handle user authentication, utilize public and/or custom API-endpoints, and allow users to engage in the classic CRUD capabilities.

## The Features

I wanted this application to have three main pieces.

### The Project Outline

With the project outline users can organize larger ideas into milestones and tasks to help them break it down into more manageable pieces. This also includes an editing window that allows users to change the order and details of each milestone and task.

<img src="/images/posts/dev/canna/editing_example.png" style="width:100%;">

### The Vision Board

Projects are sometimes a thing that you dream up, but aren't quite ready to plan in detail. That's where the vision board comes in. This future feature will allow users to collect links from their resources they create or find on the web in an easy location. I like to think of it like Pinterest without all the clutter.

### The Journal

Lastly, projects sometimes require us to learn new things. With the journal users can keep their learning resources separate from their visions. They can collect tools that can help them accomplish aspects of their project, or they can write reflections on their projects as they complete them.

## The Build

As I build Canna, I felt like I could really use Canna to keep me on track. There were so many pieces and I'm growing my abilities to manage them. I used a combination of Flask and React.

I built this using Flask to manage API endpoints, user auth and user data. This way, I got to use SQL relational databases rather than NoSQL options like Firebase that are typically used with React-Only builds. SQLAlchemy helped me to leverage my knowledge with OOP to manage the projects, milestones and tasks models. Big thanks to Flask-Praetorian for helping me with user authentication. With this package I was able to handle user JWT's and manage their sessions through protected routes.

React with Typescript and Vite let me use a component-based infrastructure. Learning Typescript as I built this was a big challenge, but in the end it was worth it. I was able to trouble shoot errors in my code much faster, and sometimes I was even able to prevent bugs by simply hovering over the variables to check that it would actually compile.

Overall, I'm really proud of this application. I learned so much by exploring, struggling, crying, and ultimately just figuring things out.

It still has a long way to go with only one of the three features being complete. I also would like to figure out how to make the application faster. With the different frameworks for server-side and client-side, most operations take a little while to load as Heroku sometimes needs to wake up the applications from the dreaded free-tier rest state.
