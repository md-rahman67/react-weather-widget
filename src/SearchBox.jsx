import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox() {
    const [city, setCity] = useState("");

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleCitySubmit(event) {
        event.preventDefault();
        console.log(city);
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