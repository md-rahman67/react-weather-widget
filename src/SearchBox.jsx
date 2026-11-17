import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({ setInfo }) {
    const [city, setCity] = useState("");
    const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    async function getLanNdLat() {
        const res = await fetch(API_URL);
        const JSONre = await res.json();

        const main = {
            city: city,
            temperature: JSONre.main.temp,
            feelsLike: JSONre.main.feels_like,
            humidity: JSONre.main.humidity,
            maxTemperature: JSONre.main.temp_max,
            minTemperature: JSONre.main.temp_min,
            Weather: JSONre.weather[0].description
        };

        setInfo(main);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    async function handleCitySubmit(event) {
        event.preventDefault();
        await getLanNdLat();
        setCity("");
    }
    return (
        <>
            <br />
            <h2>{city}</h2>
            <form onSubmit={handleCitySubmit}>
                <TextField
                    label="City Name"
                    id="city"
                    size="small"
                    required
                    value={city}
                    onChange={handleCityChange}
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </>
    )
}
