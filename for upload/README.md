# Project Name
> Weather Journal App

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This project aims to create responsive webpage that take user zip code and return the corresponding weather data.

## Screenshots
![Example screenshot](./assets/img/website_screenshot.png)

## Technologies
* HTML   - version 5.0
* CSS    - version 3.0
* JavaScript
* Node js

## Setup
To Run the project just double click on the HTML file.html

## Code Examples
const update = async () => {
    let infoRequest= await fetch ("/path2");
    try {
        let info = await infoRequest.json();
        let date = document.querySelectorAll('#date');
        let temp = document.querySelectorAll("#temp");
        let content = document.querySelectorAll("#content");
        date.innerHTML=info.date;
        temp.innerHTML=info.temp;
        content.innerHTML=info.content;
    }
    catch (err) {
        console.log(`${err} is error`);
    }
}

## Features
* Dynamic UI.
* form for data entry.
* Update UI without reload the page.


## Status
Project is: finished.

## Inspiration
The project is inspired by Udacity front-end web development course.

##Contact
Created by [@dev20loop21] (https://github.com/dev20loop21)