import React from "react";

const FooterComponent = () => {
    return (
        <div className="text-right text-white w-full shadow-md z-50">
            <footer
                data-testid="flowbite-footer"
                className="w-full bg-gray-50 shadow md:flex md:items-center md:justify-between p-6"
            >
                <div className="w-full">
                    <div>
                        <h2
                            data-testid="flowbite-footer-title"
                            className="mb-6 text-sm font-semibold uppercase text-gray-500 "
                        >
                            About Us
                        </h2>
                        <ul
                            data-testid="footer-groupLink"
                            className="flex flex-wrap text-sm text-gray-500 flex-col space-y-4"
                        >
                            <li className="last:mr-0 md:mr-6">
                                <a className="hover:underline">Smart Farm</a>
                            </li>
                            <li className="last:mr-0 md:mr-6">
                                <a className="hover:underline">iotcompany@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <hr
                        data-testid="footer-divider"
                        className="w-full my-6 border-gray-200 sm:mx-auto lg:my-8"
                    />
                    <div className="w-full sm:flex sm:items-center sm:justify-between my-5">
                        <div>
                            <span
                                className="text-sm text-gray-500 sm:text-center"
                                data-testid="flowbite-footer-copyright"
                            >
                                © 2023
                                <span
                                    data-testid="flowbite-footer-copyright-span"
                                    className="ml-1"
                                >
                                    Smart Farm
                                </span>
                            </span>
                        </div>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <div>
                                <a
                                    data-testid="flowbite-footer-icon"
                                    href="https://twitter.com/CompanyTwitter"
                                    className="text-gray-500 "
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 16 16"
                                        className="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    data-testid="flowbite-footer-icon"
                                    href="https://facebook.com/companyFacebook"
                                    className="text-gray-500 "
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 16 16"
                                        className="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    data-testid="flowbite-footer-icon"
                                    href="https://www.linkedin.com/companyLinkedIn"
                                    className="text-gray-500"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 16 16"
                                        className="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <a
                                    data-testid="flowbite-footer-icon"
                                    href="https://t.me/"
                                    className="text-gray-500 "
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 16 16"
                                        className="h-5 w-5"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterComponent;
