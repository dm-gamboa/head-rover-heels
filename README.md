# Head Rover Heels

Head Rover Heels is a web app developed as part of Shopify's 2022 Winter Internship challenge. It pulls the mission manifests and latest photos from NASA's Mars Rovers, framing the information as a "dating app".

**Link to the App [here](https://headroverheels.web.app/).**

## Features

The app allows users to:
- View manifest information on NASA's rovers.
- View a specific rover's latest photos.
- Like or dislike a specific rover.
- Save their preferences on localstorage.
- Filter rovers by their preference.

## Technologies Used
- HTML5 / SCSS / JavaScript
- Firebase Hosting
- Figma

### Libraries / APIs
- [Axios](https://www.axios.com/)
- [Swiper.js](https://swiperjs.com/)
- [Google Fonts / Material Design Icons](https://fonts.google.com/)
- [NASA's Open APIs](https://api.nasa.gov/)

## Project Setup / Development Notes

**Styling Changes**: If making styling changes, make sure you have [SASS](https://sass-lang.com/install) installed on your machine. Run `npm run dev` to automaticaly compile your changes in the SCSS to the main CSS file.

**API Key**: There is no need to set up an .env file to include the API key for NASA's API.

## Folder Structure

```
├── assets
    ├── rovers                                  # Photos displayed on Rover cards
├── common                                      # HTML templates used for rendering in JS
├── js                                          
    ├── api                                     # Calls to NASA API as well as LocalStorage functions for saving preferences
    ├── helpers                                 # Reusable functions
├── scss                                        # Folder for Sass styles
    ├── animations
    ├── components                              # Reusable components or basic HTML elements
    ├── sections                                # Main sections within pages
├── node_modules 
└── css
```

## General Notes

### Lighthouse scores
- **Performance**: 89 [^1]
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

[^1] In the future, I may want to optimize the calls for each Rover's manifest further. The payload for each is quite large, and I'm only really using certain data from it.

### Next Steps

**More filters:** It would be nice to have a more sophisticated filtering system, especially for looking through each rover's photos; we can allow the user to display photos from a certain date.

**More Martian**: I'd like to add more elements that would make the site feel more of a tribute to Mars. This could be something as simple as displaying the current weather / time on Mars (available as a NASA API), or a toggler that switches Date/Time displays from local time to Martian time.

**More Date-y**: The "dating gimmick" behind the project was what really made me excited to develop it, though unfortunately due to time constraints I couldn't be as creative with it as I'd have liked. In the future, I'd love to develop random features such as randomized messages from the Rovers (e.g. a pop-up with a corny pick-up line whenever you like a Rover?), or putting more customized information in each Rover's profile.

**Final thoughts**: Since this is a relatively simple app, I decided to develop it with vanilla JavaScript. However, I would love to recreate and enhance this project in the future, using it as an opportunity to learn Svelte.
