
import { Navigation } from '@shopify/polaris';
import {
  HomeIcon
} from '@shopify/polaris-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: HomeIcon,
      path: '/dashboard',
    },
    {
      label: 'Người dùng',
      icon: HomeIcon,
      path: '/dashboard/users',
    },
    {
      label: 'Ngân hàng',
      icon: HomeIcon,
      path: '/dashboard/banks',
    },
    {
      label: 'Hợp đồng',
      icon: HomeIcon,
      path: '/dashboard/contracts',
    },
    {
      label: 'Rút tiền',
      icon: HomeIcon,
      path: '/dashboard/withdrawals',
    },
    {
      label: 'Lịch sử giao dịch',
      icon: HomeIcon,
      path: '/dashboard/transactions',
    },
  ];

  const navigationItems = menuItems.map((item) => ({
    label: item.label,
    icon: item.icon,
    selected: location.pathname === item.path,
    onClick: () => {
      navigate(item.path);
      if (closeSidebar) closeSidebar();
    },
  }));

  return (
    <Navigation location={location.pathname}>
      <Navigation.Section items={navigationItems} />
    </Navigation>
  );
};

export default Sidebar;
