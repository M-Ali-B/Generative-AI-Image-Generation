import OpenAI from "openai";
// main.js
console.log(import.meta.env.VITE_OPENAI_API_KEY); 

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const form = document.querySelector("#posterForm");
const movieTitle = document.querySelector("#movie-title");
const artStyles = document.querySelector("#art-styles");
const posterOutput = document.querySelector("#poster-output");

/* 
  Image generation project requirements:
    - Create a prompt from the movie title and art style submitted by the user
    - Use the image generations endpoint to provide `dall-e-3`
      or `dall-e-2` the prompt created by the form submission
    - Display the final poster image within the `posterOutput` div

  Stretch goals: 
    - On submit, display text describing the image being generated 
    - Provide user feedback when any errors occur
*/

form.addEventListener("submit", function (event) {
  event.preventDefault();
  generatePoster();
  form.reset();
});

async function generatePoster() {
const image = await openai.images.generate({ 
    model: "dall-e-3", 
    prompt: movieTitle + ' ' + artStyles,
    size: "1792x1024",
    style: "natural"
});
console.log(image.data)

const finalPosterURL = image.data[0].url;

// Clear previous content (optional)
posterOutput.innerHTML = "";

// Create img element
const img = document.createElement("img");
img.src = finalPosterURL;
img.alt = "Final Poster";
img.style.maxWidth = "100%"; // makes sure it fits inside the div
img.style.height = "auto";

// Append image inside the div
posterOutput.appendChild(img);

document.body.innerHTML += `<img src="${finalPosterURL}" alt="Final Poster" style="max-width: 100%; height: auto;" />`;

}