
import { useState } from 'react';
import { Form, FormLayout, TextField, Button } from '@shopify/polaris';

const ChangePasswordForm = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = () => {
    console.log('Đổi mật khẩu thành công');
    if (onClose) onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          label="Mật khẩu cũ"
          type="password"
          value={oldPassword}
          onChange={setOldPassword}
        />
        <TextField
          label="Mật khẩu mới"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <Button submit >
          Đổi mật khẩu
        </Button>
      </FormLayout>
    </Form>
  );
};

export default ChangePasswordForm;
