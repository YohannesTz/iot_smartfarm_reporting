import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-chart";

const RealtimeDataComponent = () => {

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
        <div className="flex flex-row py-16">
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={15}
                colors={["green", "orange", "red"]}
                arcWidth={0.3}
                percent={0.10}
                formatTextValue={value => "10°C"}
                textColor={'black'}
                hideText={false} // If you want to hide the text
            />
            <GaugeChart
                id="gauge-chart2"
                nrOfLevels={15}
                colors={["green", "orange", "red"]}
                arcWidth={0.3}
                percent={0.37}
                textColor={'black'}
                hideText={false} // If you want to hide the text
            />

            <Thermometer width={windowSize.width / 2} height={windowSize.height / 2} minValue={0} maxValue={100} currentValue={100} />
        </div>
    );
};

export default RealtimeDataComponent;