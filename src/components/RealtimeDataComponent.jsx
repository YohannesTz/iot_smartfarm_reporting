import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-chart";
import axios from 'axios';
import { BASE_URL } from "../util/Constants";

const RealtimeDataComponent = (props) => {

    const [data, setData] = useState({
        hardwareId: "",
        temp: 0,
        humidity: 0,
        pumpstatus: 0,
        timestamp: ""
    });

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const userData = props.userData;
    const isRand = props.isRandom ? "&isRand=true" : "";

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
        const intervalId = setInterval(() => {
            axios
                .get(BASE_URL + `getLatestData.php?password=${userData.pwd}&hardwareId=${userData.user.hardwareId}&isEnc=true&${isRand}`)
                .then(response => {
                    if (response.data.success) {
                        setData(response.data.data);
                        console.log(response);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="py-16">
            <div className="flex flex-row">
                <GaugeChart
                    id="gauge-chart1"
                    nrOfLevels={15}
                    colors={["green", "orange", "red"]}
                    arcWidth={0.3}
                    percent={data.temp / 100}
                    formatTextValue={value => data.temp + "°C"}
                    textColor={'black'}
                    hideText={false} // If you want to hide the text
                />
                <GaugeChart
                    id="gauge-chart2"
                    nrOfLevels={15}
                    colors={["green", "orange", "red"]}
                    arcWidth={0.3}
                    percent={data.humidity / 100}
                    textColor={'black'}
                    hideText={false} // If you want to hide the text
                />

            </div>
            <div className="text-gray-800 text-left whitespace-break-normal flex-row">
                <p className="text-xl justify-center text-center py-10 font-bold">
                    <label className="relative inline-flex items-center justify-self-center cursor-pointer">
                        <input type="checkbox" checked={data.pumpstatus == '1' ? true : false} disabled={true} value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">Pump Status</span>
                    </label>
                </p>
            </div>

            {/* <Thermometer width={windowSize.width / 2} height={windowSize.height / 2} minValue={0} maxValue={100} currentValue={100} /> */}
        </div>
    );
};

export default RealtimeDataComponent;