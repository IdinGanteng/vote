import React from 'react'
import { Button, Checkbox, Form, Input, Select, Upload } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    username: "",
    password: "",
    gender:[{
        male:"",
        female:""
    }]
}
const Registrasi = () => {
    const [user, setUser] = useState(initialValue);
    const { username, password, gender } = user;

    const navigate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onFinish = () => {
        localStorage.setItem('data', JSON.stringify(user));
        alert("berhasil masuk")
        navigate('/card');
        console.log(user);
    }
    const onFinishFailed = (error) => {
        console.log('error', error);
    }

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input
                        value={user.username}
                        onChange={handleChange}
                        name="username"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        }, {
                            pattern: "^.{8,16}$",
                            message: "Minimal 8 karakter, maksimal 16 karakter"
                        }
                    ]}
                >
                    <Input.Password
                        value={user.password}
                        onChange={handleChange}
                        name="password"
                    />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message:"Pilih Jenis Kelamin!"
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={handleChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Registrasi