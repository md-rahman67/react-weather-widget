import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://i.pinimg.com/1200x/f7/4f/02/f74f02e7abbea87b60fca63c4073fa0c.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {info.temperature} °C</p>
                    <p>Feels Like: {info.feelsLike} °C</p>
                    <p>Weather: {info.Weather}</p>
                    <p>Humidity: {info.humidity} %</p>
                    <p>Maximum Temperature: {info.maxTemperature} °C</p>
                    <p>Minimum Temperature: {info.minTemperature} °C</p>
                </Typography>
            </CardContent>
        </Card >
    )
}