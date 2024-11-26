
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import {
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
} from '@shopify/polaris';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    login({ username });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card sectioned className="w-full max-w-md">
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Tên đăng nhập"
              value={username}
              onChange={setUsername}
            />
            <TextField
              label="Mật khẩu"
              type="password"
              value={password}
              onChange={setPassword}
            />
            <Button submit primary>
              Đăng nhập
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
