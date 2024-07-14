import { useEffect, useState } from "react";
<<<<<<< HEAD
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
=======
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const WeatherPage = () => {
  const [pinCode, setPinCode] = useState("");
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [cityName, setCityName] = useState<any>("");
=======
  const [cityName, setCityName] = useState<any>('')
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
  const { toast } = useToast();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        toast({ description: `Geolocation error: ${error.message}` });
      }
    );
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      setLoading(true);
<<<<<<< HEAD
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCityName(data.city.name);
=======
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setCityName(data.city.name)
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
          setLoading(false);
          if (data.cod !== "200") {
            toast({ description: "Failed to fetch weather data" });
            return;
          }
          setWeatherData(data.list);

          const formattedChartData = data.list.map((item: any) => ({
            date: item.dt_txt,
            temperature: item.main.temp - 273.15, // Convert from Kelvin to Celsius
            humidity: item.main.humidity,
          }));
          setChartData(formattedChartData);
        })
        .catch(() => {
          setLoading(false);
          toast({ description: "Error fetching weather data" });
        });
    }
  }, [latitude, longitude, API_KEY, toast]);

  const fetchWeatherDataUsingPincode = async () => {
    setLoading(true);
    try {
<<<<<<< HEAD
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${pinCode},in&appid=${API_KEY}`
      );
=======
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${pinCode},in&appid=${API_KEY}`);
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
      const data = await response.json();
      setLoading(false);
      if (data.cod !== "200") {
        toast({ description: "Failed to fetch weather data" });
        return;
      }
      setWeatherData(data.list);
      const formattedChartData = data.list.map((item: any) => ({
        date: item.dt_txt,
<<<<<<< HEAD
        temperature: item.main.temp - 273.15,
        humidity: item.main.humidity,
      }));
      setChartData(formattedChartData);
      setCityName(data.city.name);
=======
        temperature: item.main.temp - 273.15, // Convert from Kelvin to Celsius
        humidity: item.main.humidity,
      }));
      setChartData(formattedChartData);
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
    } catch {
      setLoading(false);
      toast({ description: "Error fetching weather data" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-10 pb-10">
      <Card className="w-[95%] max-w-[800px] mb-10">
        <CardHeader>
          <CardTitle>Weather Information</CardTitle>
          <CardDescription>Enter your pin code to get weather data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            <Button onClick={fetchWeatherDataUsingPincode}>Get Weather</Button>
          </div>
        </CardContent>
      </Card>
      {weatherData.length > 0 && (
        <Card className="w-[95%] max-w-[800px] mt-5">
          <CardHeader>
<<<<<<< HEAD
            <CardTitle>
              <center>Weather Data</center>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-5">
              <strong>City:</strong> {cityName}
            </div>
            <ul>
              {weatherData.slice(0, 1).map((item, index) => (
                <li key={index}>
                  {/* <div className="mb-5">
                    <strong>Date and Time:</strong> {item.dt_txt}
                  </div> */}

                  <div className="mb-5">
                    <strong>Temperature: </strong>
                    {(item.main.temp - 273.15).toFixed(2)}°C
                  </div>
                  <div className="mb-5">
                    <strong>Humidity: </strong>
                    {item.main.humidity}%
                  </div>
                  <div>
                    <strong>Weather: </strong>
                    {item.weather[0].description}
                  </div>
=======
            <CardTitle><center>Weather Data</center></CardTitle>
          </CardHeader>
          <CardContent>
              <div className="mb-5"><strong>City:</strong> {cityName}</div>
            <ul>
              {weatherData.slice(0, 1).map((item, index) => (
                <li key={index}>
                  <div className="mb-5"><strong>Date and Time:</strong> {item.dt_txt}</div>
                  
                  <div className="mb-5"><strong>Temperature: </strong>{(item.main.temp - 273.15).toFixed(2)}°C</div>
                  <div className="mb-5"><strong>Humidity: </strong>{item.main.humidity}%</div>
                  <div><strong>Weather: </strong>{item.weather[0].description}</div>
>>>>>>> 8e76f0fe4b5144f0ee5d9a46ab87ede40ee232e1
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      {loading && <p>Loading...</p>}

      {chartData.length > 0 && (
        <Card className="w-[95%] max-w-[800px] mt-5">
          <CardHeader>
            <CardTitle>Temperature and Humidity Chart</CardTitle>
            <CardDescription>Showing data for the next 5 days</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart width={700} height={400} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="humidity" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WeatherPage;
