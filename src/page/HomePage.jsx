import React from "react";
import { Button } from "flowbite-react";
import Lottie from "lottie-react";
import lottie_one from "../assets/lottie_1.json";
import lottie_two from "../assets/lottie_2.json";
import lottie_three from "../assets/lottie_3.json";

const style = {
    height: 400,
    width: 350,
};

const style_two = {
    height: 400,
    width: 400,
};

const HomePage = () => {
    return (
        <div className="justify-center md:px-5 lg:px-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center">
                <div className="text-gray-800 text-left whitespace-break-normal ">
                    <p className="text-4xl sm:text-3xl py-5">
                        Helping Farmers Make Informed Decisions for Sustainable Agriculture
                    </p>

                    <p className="text-lg">Revolutionizing Farming with Smart Reporting Solutions</p>
                    <div className="flex flex-row my-6">
                        <div>
                            <Button size="xs" pill href="/signUp">
                                Get started
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Lottie
                        animationData={lottie_one}
                        style={style}
                        loop={true}
                    />
                </div>
            </div>

            <div>
                <div class="container mx-auto py-20 lg:px-8 sm:px-5 text-gray-800">
                    <p className="text-4xl sm:text-3xl text-center text-gray-800 py-5">
                        Why Us?
                    </p>
                    <div class="grid lg:grid-cols-3 gap-2">
                        <div class="p-3 bg-white shadow-md hover:shadow-lg rounded-2xl px-5 py-6">
                            <span class="font-bold text-xl">Real-time</span>

                            <p class="mt-2 text-justify">
                                Real-time monitoring for optimal crop health: Our smart farming IoT company provides
                                real-time monitoring solutions that enable farmers to track vital parameters such as
                                soil moisture, temperature, and humidity. With our monitoring systems, farmers can make
                                informed decisions about irrigation, fertilization, and pest control, ensuring optimal
                                crop health and maximum yields.
                            </p>
                        </div>

                        <div class="p-3 bg-white shadow-md hover:shadow-lg rounded-2xl px-5 py-6">
                            <span class="font-bold text-xl">Precision</span>

                            <p class="mt-2 text-justify">
                                Precision farming for reduced costs and higher profits: Our precision farming
                                solutions leverage the power of IoT sensors and machine learning algorithms to enable
                                farmers to optimize their operations. By analyzing data on crop health, weather conditions,
                                and soil quality, our systems help farmers reduce costs and increase profits by minimizing
                                waste and maximizing yields.
                            </p>
                        </div>

                        <div class="p-3 bg-white shadow-md hover:shadow-lg rounded-2xl px-5 py-6">
                            <span class="font-bold text-xl">Sustainable</span>

                            <p class="mt-2 text-justify">
                                Sustainable agriculture for a better future: Our smart farming IoT solutions
                                promote sustainable agriculture by reducing waste, minimizing the use of harmful
                                chemicals, and conserving natural resources. By adopting our solutions, farmers
                                can improve their environmental impact and contribute to a better future for
                                generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 py-5 gap-2 place-items-center">
                    <div className="text-gray-800 text-left whitespace-break-normal ">
                        <p className="text-2xl">Our Mission</p>
                        <p>
                            we envision a world where agriculture is sustainable, efficient, and technologically advanced. We believe that farmers can achieve maximum productivity and profitability by leveraging the power of data-driven insights. Our vision is to empower farmers with cutting-edge reporting solutions that enable them to make informed decisions and optimize their operations.
                        </p>
                    </div>
                    <div>
                        <Lottie
                            animationData={lottie_three}
                            loop={true}
                            style={style_two}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 py-5 place-items-center">
                    <div>
                        <Lottie
                            animationData={lottie_two}
                            loop={true}
                            style={style_two}
                        />
                    </div>
                    <div className="text-gray-800 text-left whitespace-break-normal ">
                        <p className="text-2xl">Our Vision</p>
                        <p>
                            Our mission is to provide farmers with innovative reporting tools that help them monitor, analyze, and improve their farming practices. We aim to simplify the complex process of data collection and analysis by leveraging the latest technologies, including IoT sensors, AI algorithms, and cloud computing. Our mission is to enable farmers to maximize their yields, reduce waste, and minimize their environmental impact. We are committed to promoting sustainable agriculture and improving the livelihoods of farmers around the world.
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-4xl sm:text-3xl text-center text-gray-800 py-5">
                Group Memebers
            </p>
            <div className="grid grid-cols-3 gap-3 place-items-center py-10">
                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-lg border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/ab_moti.jpg" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Abrham Alemayehu <br /> Id: Micro 15,642/21
                    </p>
                </div>

                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-md border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/abdi_yo.jpg" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Abdi Yoseph <br /> Id: Micro 15,657/21
                    </p>
                </div>

                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-md border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/of.jpg" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Oftanan Tamirat <br /> Id: Micro 15,609/21
                    </p>
                </div>

                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-md border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/mahlet_2.jpg" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Mahlet Asnake <br /> Id: Micro 15,737/21
                    </p>
                </div>

                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-md border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/abdi_bd.jpg" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Abdi Bedada <br /> Id: Micro 15,376/21
                    </p>
                </div>

                <div className="content-center shadow-lg hover:shadow-2xl py-10 px-20 rounded-md border-2">
                    <img class="rounded-full border border-gray-100 self-center" width="150px" height="150px" src="./images/yohannes_tz.png" alt="user image" />
                    <p className="text-xl text-center text-gray-800 font-bold py-4">
                        Yohannes Tezera <br /> Id: Micro 15,648/21
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
