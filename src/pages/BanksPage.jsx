
import { useEffect, useState } from 'react';
import { Page, Card, DataTable } from '@shopify/polaris';

const BanksPage = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    const fetchBanks = async () => {
      const data = [
        { id: 1, name: 'Ngân hàng A', code: 'NHA' },
        { id: 2, name: 'Ngân hàng B', code: 'NHB' },
      ];
      setBanks(data);
    };

    fetchBanks();
  }, []);

  const rows = banks.map((bank) => [bank.name, bank.code]);

  return (
    <Page title="Danh sách ngân hàng">
      <Card>
        <DataTable
          columnContentTypes={['text', 'text']}
          headings={['Tên ngân hàng', 'Mã']}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default BanksPage;
