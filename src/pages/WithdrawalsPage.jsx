
import { useState } from 'react';
import { Page, Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';

const WithdrawalsPage = () => {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    console.log('Yêu cầu rút tiền:', amount);
    setAmount('');
  };

  return (
    <Page title="Rút tiền">
      <Card>
        <Form onSubmit={handleWithdraw}>
          <FormLayout>
            <TextField
              label="Số tiền cần rút"
              value={amount}
              onChange={setAmount}
              type="number"
            />
            <Button submit >
              Rút tiền
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default WithdrawalsPage;
