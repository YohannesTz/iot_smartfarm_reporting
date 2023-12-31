import React, { useState } from "react";
import {
    Label,
    TextInput,
    Button,
    Textarea,
    Spinner,
    Modal,
} from "flowbite-react";
import { VisiblityButton } from "../components/VisiblityButton";
import { BsFillCheckCircleFill, BsFillXOctagonFill } from "react-icons/bs";
import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";
import { BASE_URL } from "../util/Constants";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {

    const initialValues = {
        email: "",
        password: "",
        hardwareId: ""
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [result, setResult] = useState({});
    let navigate = useNavigate();

    const onClose = () => {
        setShowDialog(false);
        if (result.success) {
            navigate("/signIn");
        }
    };

    const handlePasswordVisiblity = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleInputChange = (e) => {
        const { value } = e.target;

        if (formValues.password.length + 1 >= 8 &&
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email) && formValues.hardwareId) {
            console.log("check is successfull");
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(true);
        }

        setFormValues({
            ...formValues,
            [e.target.id]: value,
        });

        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setIsLoading(true);

        const data = new URLSearchParams();
        data.append('email', formValues.email);
        data.append('password', formValues.password);
        data.append('hardwareId', formValues.hardwareId);

        axios
            .post(BASE_URL + 'signUp.php', data)
            .then(response => {
                console.log(response.data);
                setResult(response.data);
                setIsLoading(false);
                setShowDialog(true);
                console.log(result.success);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    };


    return (
        <div>
            <Modal show={showDialog} size="md" popup={true} onClose={onClose}>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        {result.success ? (
                            <div>
                                <BsFillCheckCircleFill className="mx-auto mb-4 h-14 w-14 text-gray-600 " />
                                <h3 className="mb-5 text-lg font-normal text-gray-600 ">
                                    Success!
                                </h3>
                            </div>
                        ) : (
                            <div>
                                <BsFillXOctagonFill className="mx-auto mb-4 h-14 w-14 text-gray-600 " />
                                <h3 className="mb-5 text-lg font-normal text-gray-600 ">
                                    {typeof result.message == "undefined"
                                        ? " Unknwon error! "
                                        : result.message}
                                </h3>
                            </div>
                        )}
                        <div className="flex justify-center gap-4">
                            <Button color="gray" pill size="xs" onClick={onClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="flex flex-row flex-wrap my-6 justify-center">
                <div className="text-gray-800 text-left whitespace-break-normal justify-center ">
                    <p className="text-3xl">Hi Please fill in...</p>
                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="sm:w-3/5 lg:w-2/5 md:w-3/5">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Please input your email here "
                                value={formValues.email}
                                onChange={handleInputChange}
                                required={true}
                            />
                            {/* <p className="text-red-400 2xl mt-2">{emailError}</p> */}
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <div className="flex flex-row">
                                <TextInput
                                    id="password"
                                    type={isPasswordVisible ? "text" : "password"}
                                    placeholder="Please input password here"
                                    className="grow"
                                    required={true}
                                    value={formValues.password}
                                    onChange={handleInputChange}
                                />
                                <div className="pl-1">
                                    <VisiblityButton
                                        isVisible={isPasswordVisible}
                                        onChecked={handlePasswordVisiblity}
                                    />
                                </div>
                            </div>
                            <PasswordStrengthBar password={formValues.password} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="hardwareId" value="Hardware Id" />
                            </div>
                            <TextInput
                                id="hardwareId"
                                type="text"
                                placeholder="Hardware Id"
                                required={false}
                                value={formValues.hardwareId}
                                onChange={handleInputChange}
                            />
                        </div>

                        {isLoading ? (
                            <div className="flex flex-row justify-center">
                                <Spinner></Spinner>
                            </div>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                disabled={isSubmitDisabled}
                            >
                                Submit
                            </Button>
                        )}
                        <div className="flex flex-row justify-center">
                            <p className="text-gray-800">
                                Already SignedUp?{" "}
                                <a
                                    href="/signIn"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;