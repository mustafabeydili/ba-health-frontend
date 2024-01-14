import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { sendPostRequest } from '../services/BaseAxios'; 

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  async function login() {
    try {
      const result = await sendPostRequest('','');
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className='login'>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Kullanıcı adı veya şifre yanlış',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Kullanıcı adı veya şifre yanlış',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Parola"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Beni Hatırla</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Parolamı Unuttum
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Giriş
        </Button>
       <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
  
  );
};
export default Login;