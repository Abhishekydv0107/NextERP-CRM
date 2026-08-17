import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();

  return (
    <Result
      status="info"
      title="NextERP"
      subTitle="NextERP - Modern CRM & ERP Business Management Platform"
      extra={
        <>
          <p>
            <strong>NextERP</strong> is a modern business management platform
            for customers, invoices, quotes, payments and accounting.
          </p>

          <p>
            <strong>Platform:</strong> NextERP CRM & ERP
          </p>

          <Button
            type="primary"
            onClick={() => {
              window.open('/', '_self');
            }}
          >
            Go to Dashboard
          </Button>
        </>
      }
    />
  );
};

export default About;