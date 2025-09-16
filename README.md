# Film-Fusion: Generative AI Image Generation

Film-Fusion is a web app that lets you create unique movie posters by merging your favorite film titles with classic and modern art styles, powered by OpenAI's DALL-E image generation.

## Features

- Enter a movie title and select an art style to generate a custom poster.
- Uses OpenAI's DALL-E-3 model for high-quality, AI-generated images.
- Responsive, modern UI with a variety of art styles to choose from.
- Instant preview of generated posters.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- An OpenAI API key ([get one here](https://platform.openai.com/account/api-keys))

### Installation

1. Clone the repository:
    ```sh
    git clone <your-repo-url>
    cd Generative AI Image Generation
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the project root and add your OpenAI API key:
    ```
    VITE_OPENAI_API_KEY=your_openai_api_key_here
    ```

### Running the App

Start the development server:
```sh
npm start
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Enter a movie title.
2. Select an art style from the dropdown.
3. Click "Generate Poster" to create your AI-powered movie poster.
4. The generated poster will appear below the form.

## Technologies

- [Vite](https://vitejs.dev/) for fast development and build tooling
- [OpenAI Node.js SDK](https://www.npmjs.com/package/openai) for image generation
- HTML, CSS, JavaScript

## Customization

You can add more art styles by editing the `<select>` element in [`index.html`](index.html).

## License

This project is for educational purposes.

---