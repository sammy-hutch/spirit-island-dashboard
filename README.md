# spirit-island-dashboard
code to build a dashboard for displaying stats for Spirit Island games


**concept**: a dashboard displaying stats from games played of spirit island. it shows how many games were played, average score, as well as detailed deep dives into individual performance of particular spirits, adversaries etc.

**high-level architecture**: app can connect to a google sheet to pull data for the stats (a separate dbt project will have done the data processing, modelling etc, so all this app needs to do is connect and pull the data). the app has a few different pages that shows different stats, deep-dives etc. the app may be hosted at some point, but for now i just want to be able to run it locally

**focus**: visually appealing, heavy utilisation of images/icons in tables/charts to mmake it fun to look at



## Dev Setup
running on vite + react. 

to start application:
```bash
npm run dev
```
