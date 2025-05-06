//import React from 'react';
import { Form, Button, Input, message } from "antd";
import {Link, useNavigate} from "react-router-dom";
import { LoginUser } from "../../services/user";

function Login() {
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
       // console.log("SUbmitted Values are ", values);
       try{
        const response = await LoginUser(values);
        if (response.success){
            console.log("Login Success", response.message);
            message.success(response.message);
            // Redirect to home page after successful login
            navigate("/home");
        }else{
            console.log("Login Failed", response.message);
            message.error("Login Failed: " + response.message);

        }

       }catch(error:any){
              console.log("Error in Sending the Login Request",error.message);
              throw new Error(error.message);
       }
       
       
    };
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
