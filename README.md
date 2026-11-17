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

Vite reads the environment variable when it starts. Restart the server after changing `.env`.

## Available Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist`.
- `npm run preview` previews the production build locally.
- `npm run lint` checks the project with ESLint.

## API Key Note

This app calls OpenWeatherMap directly from the browser. Vite includes `VITE_` variables in the browser build, so this key is visible to users. Restrict the key in your OpenWeatherMap account where possible. If the key was exposed, revoke it and create a replacement.

## React + Vite

Vite provides a development server with Hot Module Replacement (HMR) and ESLint rules.

This project uses `@vitejs/plugin-react`, which uses [Oxc](https://github.com/oxc-project/oxc).

## React Compiler

The React Compiler is not enabled in this project. See the [React Compiler documentation](https://react.dev/learn/react-compiler) to learn more.

## Expanding the ESLint configuration

For a TypeScript project with type-aware lint rules, see the [Vite React TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
