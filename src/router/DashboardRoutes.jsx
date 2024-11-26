
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import HomePage from '../pages/HomePage';
import UsersPage from '../pages/UsersPage';
import BanksPage from '../pages/BanksPage';
import ContractsPage from '../pages/ContractsPage';
import WithdrawalsPage from '../pages/WithdrawalsPage';
import TransactionsPage from '../pages/TransactionsPage';

const DashboardRoutes = () => (
  <Dashboard>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="banks" element={<BanksPage />} />
      <Route path="contracts" element={<ContractsPage />} />
      <Route path="withdrawals" element={<WithdrawalsPage />} />
      <Route path="transactions" element={<TransactionsPage />} />
    </Routes>
  </Dashboard>
);

export default DashboardRoutes;
