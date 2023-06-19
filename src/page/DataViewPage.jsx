import React from "react";
import { Tabs } from "flowbite-react";
import DashboardComponent from "../components/DashboardComponent";
import RealtimeDataComponent from "../components/RealtimeDataComponent";

const DataViewPage = () => {
    return (
        <div>
            <Tabs.Group
                aria-label="Default tabs"
                style="default"
            >
                <Tabs.Item
                    active
                    title="Realtime Data"
                >
                    <RealtimeDataComponent />
                </Tabs.Item>

                <Tabs.Item
                    active
                    title="Summary"
                >
                    <DashboardComponent />
                </Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default DataViewPage;