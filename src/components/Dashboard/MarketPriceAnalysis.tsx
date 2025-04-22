
import { ChartLine, ArrowDown, ArrowUp, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for market price analysis
const marketData = {
  trendingCrops: [
    { name: "Organic Tomatoes", price: 2.99, change: 0.15, trend: "up" },
    { name: "Sweet Corn", price: 0.75, change: -0.05, trend: "down" },
    { name: "Fresh Apples", price: 1.49, change: 0.10, trend: "up" },
    { name: "Bell Peppers", price: 1.25, change: 0.30, trend: "up" },
    { name: "Lettuce", price: 1.99, change: -0.20, trend: "down" },
  ],
  markets: [
    { name: "Local Farmers Market", average: 2.25, comparison: "high" },
    { name: "Regional Wholesale", average: 1.75, comparison: "medium" },
    { name: "National Average", average: 2.05, comparison: "medium" },
    { name: "Online Marketplaces", average: 2.50, comparison: "high" },
  ],
  priceHistory: {
    tomatoes: [2.55, 2.60, 2.75, 2.80, 2.99],
    corn: [0.85, 0.80, 0.85, 0.80, 0.75],
    apples: [1.25, 1.30, 1.35, 1.40, 1.49],
  }
};

export default function MarketPriceAnalysis() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-custom-green mb-8">Market Price Analysis</h1>

      <div className="flex justify-between items-center mb-6">
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="trending">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="trending">Trending Prices</TabsTrigger>
          <TabsTrigger value="market-comparison">Market Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="trending">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {marketData.trendingCrops.slice(0, 3).map((crop) => (
                <Card key={crop.name}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{crop.name}</CardTitle>
                    {crop.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-red-500" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${crop.price.toFixed(2)}</div>
                    <div className="flex items-center mt-1">
                      <span className={crop.trend === "up" ? "text-green-500" : "text-red-500"}>
                        {crop.trend === "up" ? "+" : "-"}${Math.abs(crop.change).toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">from last week</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">All Trending Products</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-right py-3 px-4">Price</th>
                    <th className="text-right py-3 px-4">Change</th>
                    <th className="text-right py-3 px-4">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.trendingCrops.map((crop) => (
                    <tr key={crop.name} className="border-b">
                      <td className="py-3 px-4">{crop.name}</td>
                      <td className="text-right py-3 px-4">${crop.price.toFixed(2)}</td>
                      <td className={`text-right py-3 px-4 ${crop.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                        {crop.trend === "up" ? "+" : "-"}${Math.abs(crop.change).toFixed(2)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {crop.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500 inline" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-500 inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="market-comparison">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketData.markets.map((market) => (
                <Card key={market.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{market.name}</CardTitle>
                    <CardDescription>Average price per unit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${market.average.toFixed(2)}</div>
                    <div className="flex items-center mt-1">
                      <span 
                        className={
                          market.comparison === "high" 
                            ? "text-green-500" 
                            : market.comparison === "low" 
                              ? "text-red-500" 
                              : "text-yellow-500"
                        }
                      >
                        {market.comparison === "high" ? "Premium" : market.comparison === "low" ? "Budget" : "Average"}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">price point</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Price History Visualization</h3>
              <Card>
                <CardHeader>
                  <CardTitle>5-Week Price Trend</CardTitle>
                  <CardDescription>For selected products</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <ChartLine className="h-16 w-16 mx-auto mb-4" />
                      <p>Price history chart would display here</p>
                      <p className="text-sm">(Interactive chart visualization)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Local prices for tomatoes are trending upward due to seasonal demand</li>
                    <li>Sweet corn prices are decreasing as harvest season progresses</li>
                    <li>Bell peppers showing strong price growth across all markets</li>
                    <li>Online marketplaces consistently offer premium prices for organic produce</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Consider increasing tomato and bell pepper production</li>
                    <li>Explore online marketplace opportunities for higher margins</li>
                    <li>Monitor corn prices - may need to adjust pricing strategy</li>
                    <li>Local farmers market remains optimal for direct consumer sales</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
