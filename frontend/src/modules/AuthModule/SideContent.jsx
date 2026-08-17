import { Layout, Typography } from 'antd';
import useLanguage from '@/locale/useLanguage';

const { Content } = Layout;
const { Title, Text } = Typography;

function NextERPLogo() {
  return (
    <svg
      width="260"
      height="80"
      viewBox="0 0 600 180"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
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
  );
}

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        {/* NextERP Logo */}
        <div
          style={{
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <NextERPLogo />
        </div>

        {/* Heading */}
        <Title
          level={1}
          style={{
            fontSize: 28,
            marginBottom: 12,
          }}
        >
          NextERP
        </Title>

        <Title
          level={3}
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginTop: 0,
            marginBottom: 12,
          }}
        >
          CRM & ERP Business Management
        </Title>

        {/* Description */}
        <Text
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: '#68738A',
          }}
        >
          Manage customers, invoices, quotes, payments and business
          operations easily with NextERP.
        </Text>

        <div className="space20" />
      </div>
    </Content>
  );
}