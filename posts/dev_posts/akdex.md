---
title: "AKDex"
date: "July 20, 2022"
exerpt: "A Flask-based collection app"
cover_image: "/images/posts/dev/akdex/allanimals.png"
link: "https://alaska-dex.herokuapp.com"
---

### View the full application here → _[AKDex](https://alaska-dex.herokuapp.com)_.

This application allows users to view and store details about local fauna and store them in their collection as a found/ observed animal. Inspired by Pokémon/Pokédex and the iNaturalist application, I wanted to use Fauna of Alaska Project’s comprehensive list and incorporate it into something beautiful.

This was built using Flask with a PostgresQL database using ElephantSQL. I was also happy to create all of the data from the CSV to the database to create a many to many relationship.

As you can see, clicking add commits that item to the user's collection. There is also a quick link for users to open the wiki to learn more about the animal they saw.

<img src="/images/posts/dev/akdex/akdexdemo.gif" style="width:100%;">
