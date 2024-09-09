![Screenshot 2024-09-09 151351](https://github.com/user-attachments/assets/21a2dd5d-0b2f-4531-8ab3-586c1d01b402)
# ClearSky

A weather web application built using React that allows users to search cities using the `react-async-paginate` package and fetch current and forecasted weather data from the OpenWeatherMap API.

## Features

- Search cities with an autocomplete feature using `react-async-paginate`.
- Fetch and display current weather data (temperature, humidity, wind speed, etc.).
- Display 5-day weather forecast.
- Interactive accordion to view detailed weather information for each day in the forecast.

## Technologies Used

- React
- `react-async-paginate` (for city search and pagination)
- OpenWeatherMap API (for current weather and forecast data)
- CSS (for styling)

## Getting Started

### Prerequisites

- Node.js installed
- OpenWeatherMap API key (You can obtain one from https://openweathermap.org/api)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/weather-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and add your OpenWeatherMap API key:
    ```bash
    REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
    ```

### Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open the app in your browser at `http://localhost:3000`.

3. Use the search bar to find cities. The current weather and forecast for the next 5 days will be displayed.

## Project Structure

