import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import WeatherCard from './WeatherCard';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    const apiKey = 'de71a08cbc1006404c136dfc6e78df1e'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeatherData(null);
    }
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <h1 className="mb-4">Weather App</h1>
      <Form className="mb-4" style={{ width: '100%', maxWidth: '400px' }}>
        <Form.Group controlId="cityInput">
          <Form.Label>Enter City</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g., Gurugram"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-3 w-100" onClick={fetchWeather}>
          Search
        </Button>
      </Form>
      {error && <p className="text-danger">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </Container>
  );
};

export default App;
