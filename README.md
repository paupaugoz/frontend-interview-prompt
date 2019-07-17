# frontend_interview_prompt
This is the homework assignment given to prospective frontend engineers. This task should not take more than 4 hours of your time. This prompt itself should last 3.5 hours, with half an hour to fill out the remaining questions on this README. 

## Task
Create a dashboard as close as possible to the following image: 
![Dashboard_mockup](https://i.imgur.com/5yDwTXk.png)

The graphs underneath <strong> Site Visits </strong> and <strong> Revenue </strong> can be placeholder images and any image that you see fit. 

## Getting started

Fork this project and clone it into your own repository. 

Please use any front-end framework you are comfortable with. 
We suggest getting started with [material-ui](https://material-ui.com/) as they have many of the the components pre-built. If you are using a different framework, there are usually equivalent libraries for material design. 

If you choose to start from scratch the font-type is: [Roboto](https://fonts.google.com/specimen/Roboto),

## Things we are looking for 
- [ ] Are the margins and padding similar to the image? Were the colors close? 
- [ ] Were clickable items accounted for with the right elements? e.g. (was a button or dropdown element used where it should have been used)
- [ ] How was the project set up? 
- [ ] If deviations to the design were made, were they justified? 

### Going above and beyond
Before moving onto these, please make sure you are happy with the overall look of your dashboard already! 
- [ ] Use your best judgement to make the dashboard responsive and collapsible at 1200px breakpoint. 
      - The lefthand drawer should collapse at 1200px.  
      - The "Totals" Section should collapse to a 2x2 block
      - The two graph blocks should stack. 

- [ ] If you have extra time, replace the placeholder images with dummy data and graphs from a visualization library like C3, D3, or React Vis. The filters on the graph do not have to work, but please share below if you had more time what you would filter on. 

- [ ] Replace the `Totals` section with data from the following endpoint with a new request being made each refresh: http://www.mocky.io/v2/5d018fbd3100005400ab2968, use your best judgement how to handle this new data. 

## Questions To Answer: 
This is your chance to talk about the prompt! Please provide these answers on your README. 
- Please share your screen resolution, OS, browser version (best if you're using latest) you used to test in so we can look at it in: 
    Screen Resolution: 1920 x 1080
    OS: Windows / some done on Macbook Air
    Browser Version: Chrome - Version 75.0.3770.142
    
- What part of the design did you get stuck on? What took the most time? Similarly, what was the easiest part? 
    I normally build everything from scratch, or use Bootstrap so it was my first time using the Material-UI framework so it took a little more time to get used to the components and the component APIs. Learning how the components worked took the most time, as well as the navbar, and making sure it was responsive once it hits the 1200px breakpoint. The easiest was implementing the menu items, and body.
    
- What part of the design didn't make sense? Did you change anything?
    I wasn't sure what the gray line beside the Navbar was, but I was assuming it was censored out to be a name or title of the client. I omitted the bar beside the hamburger menu.
    
- If you had more time, what would you have liked to implement? 
    I would have liked to have had my API working. I had test API using another website, and it displayed the data properly, but when it came down to fetching from the API given to me, it was properly doing the get requests since it wasn't producing any errors, but it wasn't displaying the properties of the "Totals" object properly. 
    
- What did you have to research or lookup while working on this? 
    I had to read the Material-UI documentation, as well as some help with the endpoint API using Axios. I also tried to deploy the web application using gh-pages, but it doesn't stick to the intended layout as it messes up the color and spacing. It is recommended to run the local version by cloning and doing npm install and npm start to run.

![Dashboard_paulo](https://i.imgur.com/kOGozOB.png)

![Dashboard_collapse](https://i.imgur.com/BePSQGw.png)














