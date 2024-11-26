
import { useState } from 'react';
import { TopBar, Modal } from '@shopify/polaris';
import useAuth from '../hooks/useAuth';
import ChangePasswordForm from './ChangePasswordForm';

const Header = ({ toggleSidebar }) => {
  const { logout } = useAuth();
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [changePasswordModalActive, setChangePasswordModalActive] =
    useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuActive((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setUserMenuActive(false);
  };

  const handleChangePassword = () => {
    setChangePasswordModalActive(true);
    setUserMenuActive(false);
  };

  const handleCloseModal = () => {
    setChangePasswordModalActive(false);
  };

  const userMenuActions = [
    {
      items: [
        { content: 'Đổi mật khẩu', onAction: handleChangePassword },
        { content: 'Đăng xuất', onAction: handleLogout },
      ],
    },
  ];

  return (
    <>
      <TopBar
        showNavigationToggle
        onNavigationToggle={toggleSidebar}
        userMenu={
          <TopBar.UserMenu
            actions={userMenuActions}
            name="Người dùng"
            detail="Quản trị viên"
            initials="N"
            open={userMenuActive}
            onToggle={handleUserMenuToggle}
          />
        }
      />
      <Modal
        open={changePasswordModalActive}
        onClose={handleCloseModal}
        title="Đổi mật khẩu"
      >
        <Modal.Section>
          <ChangePasswordForm onClose={handleCloseModal} />
        </Modal.Section>
      </Modal>
    </>
  );
};

export default Header;
