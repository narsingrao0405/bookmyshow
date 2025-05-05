import React from 'react';
import { Form, Button, Input } from "antd";
import {Link} from "react-router-dom";

function Login() {

    const onFinish = (values: any) => {
        console.log("SUbmitted Values are ", values);
    }
    return (
        <>

        <main className='App-header'>
            <h1>Login to BookMyShow</h1>
            <section className='mw-500 text-center px-3"'>

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item
                        label='Email/User Name'
                        name='email'
                        className='d-block'
                        htmlFor='email'
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please input a valid email!' }
                        ]}
                    >
                        <Input
                            id='email'
                            type='text'
                            placeholder='email'
                        />

                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'
                        className='d-block'
                        htmlFor='password'
                        rules={[
                            { required: true, message: 'Please input your password!' }

                        ]}
                    >
                        <Input
                            placeholder='password'
                            type='password'
                            id='password'
                        />
                    </Form.Item>
                    <Form.Item
                        className='d-block'>
                        <Button
                            type='primary'
                            htmlType='submit'

                            style={{ fontSize: '1.5rem', fontWeight: '600' }}
                            block
                        >
                            Login

                        </Button>
                    </Form.Item>
                    <div>
                        <p className='text-center'>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </Form>
            </section>
        </main>

    </>

    )
};

export default Login;
