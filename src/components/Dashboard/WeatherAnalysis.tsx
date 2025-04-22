
import { useState, useEffect } from "react";
import { CloudSun, CloudRain, Thermometer, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock weather data for demonstration
const weatherData = {
  current: {
    temp: 72,
    humidity: 65,
    windSpeed: 8,
    condition: "Partly Cloudy",
  },
  forecast: [
    { day: "Monday", high: 74, low: 62, condition: "Sunny" },
    { day: "Tuesday", high: 70, low: 60, condition: "Partly Cloudy" },
    { day: "Wednesday", high: 68, low: 58, condition: "Rain" },
    { day: "Thursday", high: 65, low: 55, condition: "Rain" },
    { day: "Friday", high: 70, low: 58, condition: "Partly Cloudy" },
  ],
  agricultural: {
    soilMoisture: "Adequate",
    rainProbability: "40%",
    harvestConditions: "Favorable",
    pestRisk: "Low",
  },
};

export default function WeatherAnalysis() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-custom-green mb-8">Weather Analysis</h1>

      <Tabs defaultValue="current">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="current">Current Conditions</TabsTrigger>
          <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
          <TabsTrigger value="agricultural">Agricultural Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-custom-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weatherData.current.temp}°F</div>
                <p className="text-xs text-muted-foreground">
                  Feels comfortable for most crops
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                <CloudRain className="h-4 w-4 text-custom-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weatherData.current.humidity}%</div>
                <p className="text-xs text-muted-foreground">
                  Moderate humidity levels
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wind</CardTitle>
                <Wind className="h-4 w-4 text-custom-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weatherData.current.windSpeed} mph</div>
                <p className="text-xs text-muted-foreground">
                  Gentle breeze from Southwest
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Condition</CardTitle>
                <CloudSun className="h-4 w-4 text-custom-green" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weatherData.current.condition}</div>
                <p className="text-xs text-muted-foreground">
                  Good conditions for fieldwork
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="forecast">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {weatherData.forecast.map((day) => (
              <Card key={day.day}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">{day.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center mb-2">
                    {day.condition === "Sunny" && (
                      <CloudSun className="h-8 w-8 text-custom-yellow" />
                    )}
                    {day.condition === "Partly Cloudy" && (
                      <CloudSun className="h-8 w-8 text-gray-400" />
                    )}
                    {day.condition === "Rain" && (
                      <CloudRain className="h-8 w-8 text-blue-400" />
                    )}
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold">{day.high}°</span> /{" "}
                    <span className="text-sm text-gray-600">{day.low}°</span>
                  </div>
                  <p className="text-xs text-center mt-1 text-muted-foreground">
                    {day.condition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="agricultural">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Soil Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Soil Moisture</p>
                    <p className="text-lg">{weatherData.agricultural.soilMoisture}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Rain Probability</p>
                    <p className="text-lg">{weatherData.agricultural.rainProbability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Crop Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">Harvest Conditions</p>
                    <p className="text-lg">{weatherData.agricultural.harvestConditions}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pest Risk</p>
                    <p className="text-lg">{weatherData.agricultural.pestRisk}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
