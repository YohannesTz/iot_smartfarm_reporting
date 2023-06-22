import React, { useEffect, useState, useRef } from "react";
import { Table, Tabs, Button, Checkbox, Spinner } from "flowbite-react";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/empty_ghost.json";
import axios from "axios";
import { BASE_URL } from "../util/Constants";

const style = {
    height: 350,
    width: 350,
};

const EmptyComponent = (props) => {
    return (
        <div className="m-auto">
            <Lottie animationData={notFoundAnimation} style={style} loop={true} />
            <p className="text-xl text-gray-800 text-center">
                Oops! seems like you don't have any {props.type} yet!
            </p>
            <div className="flex flex-row my-6 justify-center">
                <div className="py-0">
                    <Button size="xs" pill href="/">
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    );
};

const AdminPageComponent = () => {
    const [users, setUsers] = useState([]);
    const [feedBack, setFeedBack] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);
    const [isFeedBackLoading, setIsFeedBackLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef(null);

    useEffect(() => {
        if (activeTab === 0) {
            setIsUsersLoading(true);
            axios
                .get(BASE_URL + "getFeedback.php/users")
                .then((response) => {
                    setUsers(response.data.data);
                    setIsUsersLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsUsersLoading(false);
                });
        } else {
            setIsFeedBackLoading(true);
            axios
                .get(BASE_URL + "getFeedback.php/feedback")
                .then((response) => {
                    setFeedBack(response.data.data);
                    setIsFeedBackLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setIsFeedBackLoading(false);
                });
        }
    }, [activeTab]);

    return (
        <div>
            <div className="flex flex-row gap-3 flex-wrap my-3 justify-center">
                <div className="text-gray-700 text-left whitespace-break-normal justify-center ">
                    <p className="text-2xl">Hi Admin, Welcome...</p>
                </div>
            </div>

            <div className="flex-1 flex-col md:px-10">
                <Tabs.Group aria-aria-label="Pills" style="underline" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
                    <Tabs.Item active={true} title="Users">
                        <div className="flex flex-col h-screen">
                            {isUsersLoading && (
                                <div className="flex flex-row my-8 justify-center">
                                    <Spinner />
                                </div>
                            )}
                            {!isUsersLoading && users.length == 0 ? (
                                <EmptyComponent type="Users" />
                            ) : (
                                <Table>
                                    <Table.Head className="w-full">
                                        <Table.HeadCell>ID</Table.HeadCell>
                                        <Table.HeadCell>Email</Table.HeadCell>
                                        <Table.HeadCell>Hardware Id</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {users.length > 0 && users.map((userItem) => {
                                            return (
                                                <Table.Row key={userItem.id.toString()}>
                                                    <Table.Cell>{userItem.id}</Table.Cell>
                                                    <Table.Cell>{userItem.email}</Table.Cell>
                                                    <Table.Cell>{userItem.hardwareId}</Table.Cell>
                                                </Table.Row>
                                            );
                                        })}
                                    </Table.Body>
                                </Table>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Feed backs">
                        <div className="flex flex-col h-screen">
                            {isFeedBackLoading && (
                                <div className="flex flex-row my-8 justify-center">
                                    <Spinner />
                                </div>
                            )}
                            {!isFeedBackLoading && feedBack.length == 0 ? (
                                <EmptyComponent type="Feedback" />
                            ) : (
                                <Table>
                                    <Table.Head className="w-full">
                                        <Table.HeadCell>ID</Table.HeadCell>
                                        <Table.HeadCell>User Id</Table.HeadCell>
                                        <Table.HeadCell>Phone Number</Table.HeadCell>
                                        <Table.HeadCell>Feedback</Table.HeadCell>
                                    </Table.Head>
                                    <Table.Body className="divide-y">
                                        {feedBack.length > 0 && feedBack.map((feedBackItem) => {
                                            return (
                                                <Table.Row key={feedBackItem.id.toString()}>
                                                    <Table.Cell>{feedBackItem.id}</Table.Cell>
                                                    <Table.Cell>{feedBackItem.userId}</Table.Cell>
                                                    <Table.Cell>{feedBackItem.phonenumber}</Table.Cell>
                                                    <Table.Cell>{feedBackItem.feedback}</Table.Cell>
                                                </Table.Row>
                                            );
                                        })}
                                    </Table.Body>
                                </Table>
                            )}
                        </div>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
};

export default AdminPageComponent;