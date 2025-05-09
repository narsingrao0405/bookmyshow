//import React from 'react';
import {RegisterUser} from "../../services/user";

import {Form, Input, Button, message} from "antd";
import {Link, useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message);
                // Redirect to login page after successful registration
                navigate("/login");
                
            } else {
                message.error("Registration Failed: " + response.message);
            }
        } catch (error) {
            message.error("An error occurred during registration.");
        }
    }
  return (
    
    <main className='App-header'>
        <h1> Register to BookMyShow</h1>
        <section className='mw-500 text-center px-3"'>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item
                    label="Full Name"
                    name="name"
                    className='d-block'
                    htmlFor='name'
                    rules={[
                        {required: true, message: 'Please input your Name!'},
                    ]}>
                    <Input
                        id='name'
                        type='text'
                        placeholder='Name'
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    className='d-block'
                    htmlFor='email'
                    rules={[
                        {required: true, message: 'Please input your email!'},
                        {type: 'email', message: 'Please input a valid email!'}
                    ]}>
                    <Input
                        id='email'
                        type='text'
                        placeholder='email'
                    />
            
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    className='d-block'
                    htmlFor='pas
                    '
                    rules={[
                        {required: true, message: 'Please input your Password!'},
                    ]}>
                    <Input
                        id='password'
                        type='password'
                        placeholder='password'
                    />
            
                </Form.Item>
                <Form.Item
                    className='d-block'>
                    <Button
                        type='primary'
                        htmlType='submit'
                        style={{fontSize: '1.5rem', fontWeight: '600'}}
                        block
                    >
                        Register
                    </Button>
                </Form.Item>
                <div>
                    <p>Already a User? <Link to="/login"> Login </Link></p>
                </div>
            </Form>

        </section>
    </main>
    
  )
}

export default Register;
