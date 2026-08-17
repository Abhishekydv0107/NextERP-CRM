import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// Common Pages
const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));
const About = lazy(() => import('@/pages/About'));
const Profile = lazy(() => import('@/pages/Profile'));

// Customer
const Customer = lazy(() => import('@/pages/Customer'));

// Invoice
const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));
const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() =>
  import('@/pages/Invoice/InvoiceRecordPayment')
);

// Payment
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));

// Settings
const Settings = lazy(() => import('@/pages/Settings/Settings'));

const routes = {
  expense: [],

  default: [
    // Login
    {
      path: '/login',
      element: <Navigate to="/" replace />,
    },

    // Logout
    {
      path: '/logout',
      element: <Logout />,
    },

    // About
    {
      path: '/about',
      element: <About />,
    },

    // Home
    {
      path: '/',
      element: <Invoice />,
    },

    // Customer
    {
      path: '/customer',
      element: <Customer />,
    },

    // Invoice
    {
      path: '/invoice',
      element: <Invoice />,
    },
    {
      path: '/invoice/create',
      element: <InvoiceCreate />,
    },
    {
      path: '/invoice/read/:id',
      element: <InvoiceRead />,
    },
    {
      path: '/invoice/update/:id',
      element: <InvoiceUpdate />,
    },
    {
      path: '/invoice/pay/:id',
      element: <InvoiceRecordPayment />,
    },

    // Payment
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment/read/:id',
      element: <PaymentRead />,
    },
    {
      path: '/payment/update/:id',
      element: <PaymentUpdate />,
    },

    // Settings
    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/settings/edit/:settingsKey',
      element: <Settings />,
    },

    // Profile
    {
      path: '/profile',
      element: <Profile />,
    },

    // 404 Page
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;