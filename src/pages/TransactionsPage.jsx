
import { useEffect, useState } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = [
        {
          id: 1,
          date: '2023-10-01',
          type: 'Deposit',
          amount: '50,000,000 VND',
        },
        {
          id: 2,
          date: '2023-10-15',
          type: 'Withdraw',
          amount: '10,000,000 VND',
        },
      ];
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  const rows = transactions.map((transaction) => [
    transaction.date,
    transaction.type === 'Deposit' ? 'Nạp tiền' : 'Rút tiền',
    transaction.amount,
  ]);

  return (
    <Page title="Lịch sử giao dịch">
      <Card>
        <DataTable
          columnContentTypes={['text', 'text', 'text']}
          headings={['Ngày', 'Loại giao dịch', 'Số tiền']}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default TransactionsPage;
