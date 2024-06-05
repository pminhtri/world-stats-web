import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../layouts';
import { Card, Typography } from 'antd';
import { Container } from '../uiComponents';
import { opacityColors } from '../theme';

const HomePageBody = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex w-full py-10 justify-center items-center flex-col bg-background-200`}
    >
      <Typography.Title level={1}>{t('overview')}</Typography.Title>
      <Typography.Paragraph
        style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          color: `${opacityColors.blueOpacity(0.9)}`,
        }}
      >
        {t('content.landingPage')}
      </Typography.Paragraph>
      <div className="grid sm:grid-rows-2 md:grid-cols-2 gap-10">
        <Card
          bordered={false}
          hoverable
          style={{
            width: 400,
          }}
        >
          <div className="flex justify-center items-center">
            <Typography.Text
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: `${opacityColors.blueOpacity(0.8)}`,
              }}
            >
              {t('header.listOption.Geography')}
            </Typography.Text>
          </div>
        </Card>
        <Card
          bordered={false}
          hoverable
          style={{
            width: 400,
          }}
        >
          <div className="flex justify-center items-center">
            <Typography.Text
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: `${opacityColors.blueOpacity(0.8)}`,
              }}
            >
              {t('header.listOption.Population')}
            </Typography.Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <Container>
      <Header />
      <HomePageBody />
      <Footer />
    </Container>
  );
};

export default HomePage;
