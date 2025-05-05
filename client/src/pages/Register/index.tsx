import React from 'react';

import {Form, Input, Button} from "antd";
import {Link} from "react-router-dom";

function Register() {
    const onFinish = (values: any) => {
        console.log("Submitted Values are ", values);
    }
  return (
    <>
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
                    <p>Already Have the Account <Link to="/login"> Login </Link></p>
                </div>
            </Form>

        </section>
    </main>
    </>
  )
}

export default Register;
