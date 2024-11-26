
import { useEffect, useState } from 'react';
import { Page, Card, DataTable, Button } from '@shopify/polaris';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = [
        { id: 1, name: 'Nguyễn Văn A', email: 'a@example.com', verified: false },
        { id: 2, name: 'Trần Thị B', email: 'b@example.com', verified: true },
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleVerify = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, verified: true } : user
      )
    );
  };

  const rows = users.map((user) => [
    user.name,
    user.email,
    user.verified ? 'Đã định danh' : 'Chưa định danh',
    user.verified ? (
      '—'
    ) : (
      <Button  onClick={() => handleVerify(user.id)}>
        Xác nhận định danh
      </Button>
    ),
  ]);

  return (
    <Page title="Danh sách người dùng">
      <Card>
        <DataTable
          columnContentTypes={['text', 'text', 'text', 'text']}
          headings={['Tên', 'Email', 'Trạng thái định danh', 'Hành động']}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default UsersPage;
