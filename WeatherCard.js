import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ data }) => {
    const { name, main, weather } = data;

    return (
        <Card
            style={{
                width: '18rem',
                background: 'linear-gradient(135deg, #56CCF2, #2F80ED)',
                color: 'white',
                borderRadius: '15px',
            }}
            className="shadow text-center p-4"
        >
            <Card.Body>
                <div style={{ fontSize: '5rem' }} className="mb-3">
                    <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} />
                </div>
                <h2 style={{ fontWeight: 'bold' }} className="mb-2">
                    {Math.round(main.temp)}°C
                </h2>
                <Card.Title>{name}</Card.Title>
                <Card.Text style={{ textTransform: 'capitalize' }}>
                    {weather[0].description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;
