import React, { useState } from 'react';
import './AuthPopup.css';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiOutlineClose } from 'react-icons/ai';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { ToastContainer, toast } from 'react-toastify';

interface AuthPopupProps {
    setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SignupFormData {
    name: string | null;
    email: string | null;
    password: string | null;
    weightInKg: number | null;
    heightInCm: number | null;
    goal: string | null;
    gender: string | null;
    dob: Date | null;
    activityLevel: string | null;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ setShowpopup }) => {
    const [showSignup, setShowSignup] = useState<boolean>(false);
    const [signupformData, setSignupFormData] = useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: new Date(),
        activityLevel: '',
    });
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = () => {
        toast.success("Login successful!"); // Display success message immediately

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginformData),
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.ok) {
                    setShowpopup(false); // Close popup if successful
                } else {
                    toast.error(data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("An error occurred. Please try again.");
            });
    };

    const handleSignup = () => {
        toast.success("Signup successful!"); // Display success message immediately

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupformData),
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.ok) {
                    setShowSignup(false); // Switch to login form if signup is successful
                } else {
                    toast.error(data.message);
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("An error occurred. Please try again.");
            });
    };

    return (
        <div className='popup'>
            <button className='close' onClick={() => setShowpopup(false)}>
                <AiOutlineClose />
            </button>
            {showSignup ? (
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className='right'>
                        <h1>Signup to become a freak</h1>
                        <form action="">
                            <Input
                                color="warning"
                                placeholder="name"
                                size="lg"
                                variant="solid"
                                onChange={(e) => setSignupFormData({ ...signupformData, name: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="email"
                                size="lg"
                                variant="solid"
                                onChange={(e) => setSignupFormData({ ...signupformData, email: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="password"
                                size="lg"
                                variant="solid"
                                type="password"
                                onChange={(e) => setSignupFormData({ ...signupformData, password: e.target.value })}
                            />
                            <Input
                                color="warning"
                                size="lg"
                                variant="solid"
                                type="number"
                                placeholder="Weight in kg"
                                onChange={(e) => setSignupFormData({ ...signupformData, weightInKg: parseFloat(e.target.value) })}
                            />
                            <Select
                                color="warning"
                                placeholder="Activity Level"
                                size="lg"
                                variant="solid"
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, activityLevel: newValue || '' })}
                            >
                                <Option value="sedentary">Sedentary</Option>
                                <Option value="light">Light</Option>
                                <Option value="moderate">Moderate</Option>
                                <Option value="active">Active</Option>
                                <Option value="veryActive">Very Active</Option>
                            </Select>
                            <Select
                                color="warning"
                                placeholder="Goal"
                                size="lg"
                                variant="solid"
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, goal: newValue || '' })}
                            >
                                <Option value="weightLoss">Lose</Option>
                                <Option value="weightMaintain">Maintain</Option>
                                <Option value="weightGain">Gain</Option>
                            </Select>
                            <Select
                                color="warning"
                                placeholder="Gender"
                                size="lg"
                                variant="solid"
                                onChange={(event, newValue) => setSignupFormData({ ...signupformData, gender: newValue || '' })}
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>
                            <label htmlFor="">Height</label>
                            <Input
                                color="warning"
                                size="lg"
                                variant="solid"
                                type="number"
                                placeholder="cm"
                                onChange={(e) => setSignupFormData({ ...signupformData, heightInCm: parseFloat(e.target.value) })}
                            />
                            <label htmlFor="">Date of Birth</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    defaultValue={dayjs(new Date())}
                                    sx={{ backgroundColor: 'white' }}
                                    onChange={(newValue) => setSignupFormData({ ...signupformData, dob: new Date(newValue as any) })}
                                />
                            </LocalizationProvider>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSignup();
                                }}
                            >
                                Signup
                            </button>
                        </form>
                        <p>
                            Already have an account?{' '}
                            <button onClick={() => setShowSignup(false)}>Login</button>
                        </p>
                    </div>
                </div>
            ) : (
                <div className='authform'>
                    <div className='left'>
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div className='right'>
                        <h1>Login to become a freak</h1>
                        <form action="">
                            <Input
                                color="warning"
                                placeholder="email"
                                size="lg"
                                variant="solid"
                                onChange={(e) => setLoginFormData({ ...loginformData, email: e.target.value })}
                            />
                            <Input
                                color="warning"
                                placeholder="password"
                                size="lg"
                                variant="solid"
                                type="password"
                                onChange={(e) => setLoginFormData({ ...loginformData, password: e.target.value })}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLogin();
                                }}
                            >
                                Login
                            </button>
                        </form>
                        <p>
                            Don't have an account?{' '}
                            <button onClick={() => setShowSignup(true)}>Signup</button>
                        </p>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default AuthPopup;
