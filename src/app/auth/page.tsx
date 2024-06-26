"use client"

import { useState } from 'react';
import { Form, Input, Button } from 'antd';


const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login page
  const toggleAuthMode = () => {
    setIsLogin(prev => !prev); // Toggle between login and signup
  };

  const handleSubmit = (values: any) => {
    console.log('Form values:', values);
    // Add your login or signup logic here
  };


  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
        <Form
          name={isLogin ? 'login' : 'signup'}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          style={{ width: '300px' }}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="someone@gmail.com" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>
          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="confirm password" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" onClick={toggleAuthMode}>
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default AuthPage;

