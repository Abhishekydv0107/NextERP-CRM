import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import useLanguage from '@/locale/useLanguage';
import useResponsive from '@/hooks/useResponsive';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ContainerOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  CreditCardOutlined,
  MenuOutlined,
  ShopOutlined,
  WalletOutlined,
  ReconciliationOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

/* =========================
   NextERP Logo
========================= */

function NextERPLogo() {
  return (
    <svg
      width="210"
      height="70"
      viewBox="0 0 600 180"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
      }}
    >
      <rect
        x="10"
        y="20"
        width="140"
        height="140"
        rx="28"
        fill="#1261D6"
      />

      <path
        d="M42 125V58h22l29 38 29-38h22v67h-23V91l-28 35-28-35v34H42z"
        fill="white"
      />

      <text
        x="175"
        y="105"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="68"
        fontWeight="700"
        fill="#14244B"
      >
        Next
      </text>

      <text
        x="350"
        y="105"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="68"
        fontWeight="700"
        fill="#1261D6"
      >
        ERP
      </text>

      <text
        x="178"
        y="140"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="18"
        letterSpacing="4"
        fill="#68738A"
      >
        CRM • ERP • BUSINESS
      </text>
    </svg>
  );
}

/* =========================
   Navigation
========================= */

export default function Navigation() {
  const { isMobile } = useResponsive();

  return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

/* =========================
   Desktop Sidebar
========================= */

function Sidebar({ collapsible, isMobile = false }) {
  const location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;

  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);

  const [currentPath, setCurrentPath] = useState(
    location.pathname === '/' ? 'dashboard' : location.pathname.slice(1)
  );

  const translate = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/">{translate('dashboard')}</Link>,
    },
    {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: <Link to="/customer">{translate('customers')}</Link>,
    },
    {
      key: 'invoice',
      icon: <ContainerOutlined />,
      label: <Link to="/invoice">{translate('invoices')}</Link>,
    },
    {
      key: 'quote',
      icon: <FileSyncOutlined />,
      label: <Link to="/quote">{translate('quote')}</Link>,
    },
    {
      key: 'payment',
      icon: <CreditCardOutlined />,
      label: <Link to="/payment">{translate('payments')}</Link>,
    },
    {
      key: 'paymentMode',
      label: <Link to="/payment/mode">{translate('payments_mode')}</Link>,
      icon: <WalletOutlined />,
    },
    {
      key: 'taxes',
      label: <Link to="/taxes">{translate('taxes')}</Link>,
      icon: <ShopOutlined />,
    },
    {
      key: 'generalSettings',
      label: <Link to="/settings">{translate('settings')}</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: 'about',
      label: <Link to="/about">{translate('about')}</Link>,
      icon: <ReconciliationOutlined />,
    },
  ];

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentPath('dashboard');
    } else {
      setCurrentPath(location.pathname.slice(1));
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(true);
    }

    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isNavMenuClose]);

  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : false}
      onCollapse={onCollapse}
      className="navigation"
      width={256}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: isMobile ? 'absolute' : 'relative',
        bottom: '20px',
        ...(!isMobile && {
          left: '20px',
          top: '20px',
        }),
      }}
      theme="light"
    >
      {/* =========================
          NextERP Logo
      ========================= */}

      <div
        className="logo"
        onClick={() => navigate('/')}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          minHeight: '90px',
          overflow: 'hidden',
        }}
      >
        <NextERPLogo />
      </div>

      {/* =========================
          Menu
      ========================= */}

      <Menu
        items={items}
        mode="inline"
        theme="light"
        selectedKeys={[currentPath]}
        style={{
          width: 256,
        }}
      />
    </Sider>
  );
}

/* =========================
   Mobile Sidebar
========================= */

function MobileSidebar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="text"
        size="large"
        onClick={showDrawer}
        className="mobile-sidebar-btn"
        style={{
          marginLeft: 25,
        }}
      >
        <MenuOutlined style={{ fontSize: 18 }} />
      </Button>

      <Drawer
        width={250}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
      >
        <Sidebar collapsible={false} isMobile={true} />
      </Drawer>
    </>
  );
}