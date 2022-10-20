---
title: "Web App: Weather"
date: "August 08, 2022"
exerpt: "A React-Based Weather App"
cover_image: "/images/posts/dev/weather/weatherthumb.png"
link: "https://weather2.lauraashlee.art"
---

### View the full application here → [Whether Weather](https://weather2.lauraashlee.art)_.

This application was designed to improve the basic, vanilla javascript version of the same application. _[Link to Weather 1](https://weather.lauraashlee.art)_

<img src="/images/posts/dev/weather/weather1.png" style="width:100%;">

The first one uses a simple call to the OpenWeatherAPI to get data by city. There's a lot of form data and templating to make this one work.

Weather 2 is designed to build on that by incorporating not only better components, but also allowing users to sign in and choose favorite cities that they can get information on by the click of a button.

Of course, I made things interesting for myself by opting out of "create-react-app". This meant I had to configure my own WebPack in order for it to all come together. While this was a huge pain that I wouldn't like to do again, I think it helped me understand the complexity of dependencies that React relies on to work even if my understanding goes only as far as "it's complex, alright."

Until I understand more, I'll stick with Vite.
