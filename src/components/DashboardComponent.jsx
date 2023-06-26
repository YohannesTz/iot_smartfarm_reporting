import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, Legend } from 'recharts';
import axios from "axios";
import { BASE_URL } from "../util/Constants";

const DashboardComponent = (props) => {
    const [timeMode, setTimeMode] = useState(1);
    const [data, setData] = useState([{
        hardwareId: "",
        temp: 0,
        humidity: 0,
        pumpstatus: 0,
        timestamp: ""
    }]);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const userData = props.userData;
    const isRand = props.isRandom ? "&isRand=false" : "";

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

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(BASE_URL + `getSummary.php?password=${userData.pwd}&hardwareId=${userData.user.hardwareId}&isEnc=true${isRand}&mode=${timeMode}`)
                .then(response => {
                    if (response.data.success) {
                        setData(response.data.data);
                        console.log(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

        fetchData();
    }, [timeMode]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const month = date.toLocaleString('default', { month: 'short' });
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedDate = `${month} ${day} at ${hours}:${minutes}`;
        return formattedDate;
    }

    const amplifyPumpStatus = (pumpstatus) => {
        return pumpstatus == 1 ? 30 : 0;
    }

    return (
        <div>
            <div className="flex flex-col flex-wrap my-6 justify-center">
                <div className="flex-row">
                    <div className="text-gray-800 whitespace-break-normal flex-row">
                        <p className="text-xl justify-center text-center font-bold">Your Tracking for device: {userData.user.hardwareId}</p>
                    </div>
                    <div className="text-gray-800 whitespace-break-normal py-5 flex items-center justify-center">
                        <Button.Group>
                            <Button color="gray" onClick={() => setTimeMode(1)}>
                                6hr
                            </Button>
                            <Button color="gray" onClick={() => setTimeMode(2)}>
                                1 Day
                            </Button>
                            <Button color="gray" onClick={() => setTimeMode(3)}>
                                1 Week
                            </Button>
                            <Button color="gray" onClick={() => setTimeMode(4)}>
                                1 Month
                            </Button>
                        </Button.Group>
                    </div>
                </div>
                <div className="flex-row justify-center">
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
                            <linearGradient id="colorZv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#c87909" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#c87909" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Legend verticalAlign="top" height={36} />
                        <XAxis dataKey="timestamp" name="Time" tickFormatter={formatDate} />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" name="Temprature" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" name="Humidity" dataKey="humidity" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        <Area type="monotone" name="Pumpstatus" dataKey="pumpstatus" stroke="#c87909" fillOpacity={1} fill="url(#colorZv)" tickFormatter={amplifyPumpStatus} />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponent;