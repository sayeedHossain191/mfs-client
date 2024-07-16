import axios from "axios";
import { useState } from "react";

const Register = () => {


    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobileNumber: '',
        email: '',
    });

    const { name, pin, mobileNumber, email } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/register', formData);
            console.log(res.data);
            // Redirect or show success message
        } catch (err) {
            console.error(err.response.data);
        }
    };


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                />
                <input
                    type="number"
                    placeholder="5-digit PIN"
                    name="pin"
                    value={pin}
                    onChange={onChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={onChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;