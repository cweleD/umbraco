*This project is built with Umbraco 15!*

Since my machine had configuration issues, I was able to generate models but couldn't use them. I also tried to use a theme from HubSpot, but after doing a building, the theme would crash.

I then decided to use `IPublishedContent` instead of strongly typed content to create modules like Hero Header, Carousel Slides, Card CTA, and Stack Cards (which were supposed to be a slider). However, time wasn't on my side, so I made just cards for now. I will continue pushing to Git until I get it 100% right.

For styling, I installed SASS and borrowed the grid SASS file from Bootstrap to speed up the process. I am compiling all my styles into one file, `main.css`, and then referencing it. The fonts are sourced from Google Fonts. The package I used for sliders is Swiper.js, which is easy to use and responsive.

I still wish I could have used strongly typed content—it could have been the best project ever!

## Check it out:
Download or clone the repo. Navigate to the solution or the `spincasino` folder:

1. Run `dotnet build`
2. Run the project using `dotnet run`
3. Access the backoffice by appending `/umbraco` to your URL, e.g., `https://localhost:44385/umbraco`
4. To log in:
   - **Email:** delan.cwele@gmail.com
   - **Password:** 1234567890

80% of the content is pulled from Umbraco.

To work with CSS:

1. Run `npm install`
2. Run `npm run sass` to watch and compile the SASS file changes. 

## Issues
Since everything is coming from umbraco, the SVGs i have on the game node are all white svg, so on the white tag, it won't show anyway. I can't couldn't overwrite the color in it. 
<img width="1365" alt="Screenshot 2025-02-01 at 18 24 23" src="https://github.com/user-attachments/assets/973bb2f8-21c4-4478-84f1-983035b99932" />

#Navigation links will give an error if you click on it. 
<img width="344" alt="Screenshot 2025-02-01 at 18 38 11" src="https://github.com/user-attachments/assets/17cf1e45-e8b8-40c7-aa62-d197c2322abd" />

# I kept the name under the card for search purposes on the card. Though the search functionality doesn't have a fallback or text that says game not found. 
<img width="1489" alt="Screenshot 2025-02-01 at 19 14 39" src="https://github.com/user-attachments/assets/5534f5b6-bee6-4aaa-8a50-298601515cc8" />

