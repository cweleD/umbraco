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
2. Run `npm run sass` to watch and compile the SASS file changes

