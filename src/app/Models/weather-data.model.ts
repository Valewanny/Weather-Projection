export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
icon: any;
    description: string;
  }[];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
