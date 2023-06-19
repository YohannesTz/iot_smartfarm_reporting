import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page H',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page I',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const DashboardComponent = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="flex flex-col flex-wrap my-6 justify-center">
                <div className="flex-row">
                    <div className="text-gray-800 whitespace-break-normal flex-row">
                        <p className="text-xl justify-center text-center font-bold">Your Tracking for device: </p>
                    </div>
                    <div className="text-gray-800 whitespace-break-normal py-5 flex items-center justify-center">
                        <Button.Group>
                            <Button color="gray">
                                6hr
                            </Button>
                            <Button color="gray">
                                1 Day
                            </Button>
                            <Button color="gray">
                                1 Week
                            </Button>
                            <Button color="gray">
                                1 Month
                            </Button>
                        </Button.Group>
                    </div>
                </div>
                <div className="flex-row justify-center">
                    {/* <AreaChart width={windowSize.width - 200} height={windowSize.height - 200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#03fc66" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </AreaChart> */}

                    <AreaChart width={windowSize.width - 200} height={windowSize.height - 200} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>

                <div className="text-gray-800 text-left whitespace-break-normal flex-row">
                    <p className="text-xl justify-center text-center py-10 font-bold">
                        <label className="relative inline-flex items-center justify-self-center cursor-pointer">
                            <input type="checkbox" checked={false} disabled={true} value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">Pump Status</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;