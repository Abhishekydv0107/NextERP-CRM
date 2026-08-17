import useLanguage from '@/locale/useLanguage';

import { Layout, Col, Divider, Typography } from 'antd';

import AuthLayout from '@/layout/AuthLayout';
import SideContent from './SideContent';

const { Content } = Layout;
const { Title } = Typography;

const AuthModule = ({
  authContent,
  AUTH_TITLE,
  isForRegistre = false,
}) => {
  const translate = useLanguage();

  return (
    <AuthLayout sideContent={<SideContent />}>
      <Content
        style={{
          padding: isForRegistre
            ? '40px 30px 30px'
            : '100px 30px 30px',
          maxWidth: '440px',
          margin: '0 auto',
        }}
      >
        {/* Mobile NextERP Logo */}
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 0 }}
          span={0}
        >
          <div
            className="nexterp-mobile-logo"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '25px',
            }}
          >
            <svg
              width="220"
              height="70"
              viewBox="0 0 600 180"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            >
              {/* Blue M Icon */}
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
                fill="#FFFFFF"
              />

              {/* Next */}
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

              {/* ERP */}
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

              {/* Tagline */}
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
          </div>

          <div className="space10" />
        </Col>

        {/* Login / Register Title */}
        <Title level={1}>{translate(AUTH_TITLE)}</Title>

        <Divider />

        {/* Authentication Content */}
        <div className="site-layout-content">
          {authContent}
        </div>
      </Content>
    </AuthLayout>
  );
};

export default AuthModule;