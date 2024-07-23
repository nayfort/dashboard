// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Customers from './pages/Customers/Customers.jsx';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/income" element={<Income />} />
      <Route path="/promote" element={<Promote />} />
      <Route path="/help" element={<Help />} />
    </Routes>
);

export default AppRoutes;
