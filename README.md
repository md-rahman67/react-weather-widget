# React Weather App

A weather app built with React and Vite. Search for a city to see its current weather.

## Features

- Search for a city by name.
- Get current weather from the OpenWeatherMap Current Weather API.
- View temperature, feels-like temperature, weather description, humidity, and minimum and maximum temperatures in Celsius.
- Uses Material UI for the search form and weather card.

## Getting Started

Run these commands from the project folder (the folder with `package.json`):

```sh
npm install
```

Copy `.env.example` to `.env` in the project folder. Open `.env` and add your OpenWeatherMap API key:

```text
VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your own key. Keep `.env` out of Git. The `.env.example` file is a template and should not contain a real key.

Start the development server:

```sh
npm run dev
```

## Author

Created as a personal learning project to practice Node.js, Express.js, and REST API development.

