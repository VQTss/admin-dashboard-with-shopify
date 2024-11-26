// src/pages/ContractsPage.jsx

import { useEffect, useState } from 'react';
import { Page, Card, Tabs, DataTable, Badge, Button } from '@shopify/polaris';

const ContractsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      const data = [
        {
          id: 1,
          customer: 'Nguyễn Văn A',
          amount: '100,000,000 VND',
          status: 'pending',
        },
        {
          id: 2,
          customer: 'Trần Thị B',
          amount: '200,000,000 VND',
          status: 'active',
        },
        {
          id: 3,
          customer: 'Lê Văn C',
          amount: '150,000,000 VND',
          status: 'completed',
        },
      ];
      setContracts(data);
    };

    fetchContracts();
  }, []);

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTab(selectedTabIndex);
  };

  const tabs = [
    {
      id: 'pending',
      content: 'Đang chờ duyệt',
      status: 'pending',
    },
    {
      id: 'active',
      content: 'Đang diễn ra',
      status: 'active',
    },
    {
      id: 'completed',
      content: 'Đã tất toán',
      status: 'completed',
    },
  ];

  const filteredContracts = contracts.filter(
    (contract) => contract.status === tabs[selectedTab].status
  );

  const rows = filteredContracts.map((contract) => [
    contract.customer,
    contract.amount,
    <Badge
      status={
        contract.status === 'pending'
          ? 'attention'
          : contract.status === 'active'
          ? 'success'
          : 'default'
      }
    >
      {contract.status === 'pending'
        ? 'Đang chờ duyệt'
        : contract.status === 'active'
        ? 'Đang diễn ra'
        : 'Đã tất toán'}
    </Badge>,
    <Button onClick={() => handleViewDetails(contract.id)}>Xem chi tiết</Button>,
  ]);

  const handleViewDetails = (id) => {
    console.log('Xem chi tiết hợp đồng:', id);
  };

  return (
    <Page title="Danh sách hợp đồng">
      <Card>
        <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange}>
          <Card.Section>
            <DataTable
              columnContentTypes={['text', 'text', 'text', 'text']}
              headings={['Khách hàng', 'Số tiền', 'Trạng thái', 'Hành động']}
              rows={rows}
            />
          </Card.Section>
        </Tabs>
      </Card>
    </Page>
  );
};

export default ContractsPage;
