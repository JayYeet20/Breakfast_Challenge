# What'd I eat for breakfast?

Welcome to this frontend web dev challenge. After completing this, you'll never forget what you had for breakfast again!!

**Task:** build the webpage of a nutrition tracker tool 🥘⚒️

When completed:
- Users can enter food items that they ate, adding them to a list 🥐🥑🍜
- The webpage will lookup each food's nutrition values and display them in a table 💪✨
- There should be a running sum of these values 🏃

Your page could look like something like this, or better (for extra bonus points)!

![expected final webpage](./images/step%203.png)

## Languages and frameworks
This challenge can be developed in any web-based language or framework you want (e.g. jQuery, React). Server-side frontend frameworks are okay too.

Can't choose? We've provided some starter HTML + JavaScript code for you. It's the quickest option requiring minimal setup -- just double click in Finder/File Explorer to open it in a browser! 🧑‍💻

## Requirements
There are three stages to this challenge. Each stage gets progressively harder, and gets you closer to the final product. The stages are only guidelines. You may go for the final stage for full points if you are up to the task!

Also, up to 50 additional points can be awarded in total if it looks pretty and/or has extra functionality!

| # | Description                   | Requirements                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Helpful Resources                                                                                                                                                                                                                                                                                                                                                                                                                | Points             | Example - Click to enlarge        |
|---|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|-----------------------------------|
| 1 | 👀 Build the webpage UI        | 1. HTML elements present: buttons, input, headings<br>2. Two-column format<br>3. Doesn't have to be functional                                                                                                                                                                                                                                                                                                                                                                                                            | - [Intro to HTML](https://www.w3schools.com/html/html_intro.asp)<br>- [Bootstrap buttons](https://getbootstrap.com/docs/5.0/components/buttons/)<br>- [Bootstrap forms](https://getbootstrap.com/docs/5.0/forms/overview/)<br>- [Bootstrap columns](https://getbootstrap.com/docs/5.0/layout/columns/)                                                                                                                           | 100                | ![stage 1](./images/step%201.png) |
| 2 | 🖱️ Support functionality       | 1. Support adding: when user enters a food and clicks Add, it gets displayed on the list<br>2. Support resetting: when Reset is clicked, all foods are removed, and new foods can be added                                                                                                                                                                                                                                                                                                                                | - [Intro to JavaScript](https://www.w3schools.com/js/js_intro.asp)<br>- [HTML DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)<br>- [Stop form refreshing page on submit](https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit)                                                                                              | 100<br>(200 Total) | ![stage 2](./images/step%202.png) |
| 3 | 📊 Query external API for data | 1. Sign up for a USDA API key (see [API Guide/Gaining Access](https://fdc.nal.usda.gov/api-guide.html#bkmk-3))<br>2. When a food is added, it uses the food API to search for the entered food<br>&emsp;a. For best results I recommend using `dataType=SR%20Legacy` in addition to the query to filter out branded foods<br>3. The first search result (if any) can be used as a match<br>4. The #, food, and at least one nutrient gets displayed in a table<br>5. Total sums for nutrients are displayed at the bottom | - [USDA Food Data API Guide](https://fdc.nal.usda.gov/api-guide.html)<br>- [Intro to HTTP](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)<br>- [JavaScript fetch()](https://www.w3schools.com/jsref/api_fetch.asp)<br>- [Async/await](https://www.theodinproject.com/lessons/node-path-javascript-async-and-await)<br>- [Bootstrap tables](https://getbootstrap.com/docs/5.0/content/tables/) | 150<br>(350 Total) | ![stage 3](./images/step%203.png) |