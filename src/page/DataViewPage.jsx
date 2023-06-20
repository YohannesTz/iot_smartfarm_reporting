import React from "react";
import { Tabs } from "flowbite-react";
import DashboardComponent from "../components/DashboardComponent";
import RealtimeDataComponent from "../components/RealtimeDataComponent";
import Lottie from "lottie-react";
import unAuthorizedAnimation from "../assets/unauthorized_error.json";
import { Button } from "flowbite-react";

const style = {
    height: 400,
    width: 350,
};

const DataViewPage = () => {
    // Retrieve the data from local storage
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log(data);
    if (data == null || typeof (data) == "undefined") {
        return (
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="flex flex-row justify-center">
                        <Lottie
                            animationData={unAuthorizedAnimation}
                            style={style}
                            loop={true}
                        />
                    </div>

                    <p className="text-2xl text-gray-800 text-center">
                        Oops! seems like your are not allowed to see this page
                    </p>
                    <div className="flex flex-row my-6 justify-center">
                        <div className="py-0">
                            <Button size="sm" pill href="/">
                                Return to Home
                            </Button>
                        </div>

                        <div className="py-0 px-3">
                            <Button size="sm" pill outline href="/signIn">
                                SignIn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-10">
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