
import { Frame } from '@shopify/polaris';
import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  return (
    <Frame
      topBar={<Header toggleSidebar={toggleSidebar} />}
      navigation={<Sidebar closeSidebar={closeSidebar} />}
      showMobileNavigation={sidebarActive}
      onNavigationDismiss={closeSidebar}
    >
      <div className="p-4">{children}</div>
    </Frame>
  );
};

export default Dashboard;
