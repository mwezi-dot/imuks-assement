// pages/landing.tsx
"use client"
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  LoginOutlined,
  FileAddOutlined
} from '@ant-design/icons';

import styles from '../app/page.module.css'; // Import CSS styles

const { Header, Content, Footer } = Layout;

// Example background image URL
const backgroundImageUrl = 'https://source.unsplash.com/random/1920x1080';

const LandingPage: React.FC = () => {
  return (
    <Layout className={"layout"}>
      <Head>
        <title>Next.js TypeScript Landing Page</title>
        <meta
          name="description"
          content="Your landing page description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Customized Header with transparent background */}
      <Header className={"header"} style={{ background: 'transparent', position: 'absolute', width: '100%', zIndex: 1 }}>
        <div className={"logo"}>
          <img src="/vercel.svg" alt="Vercel Logo" className={"logo-image"} />
          <span className={"logo-text"}> intro</span>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ background: 'transparent' }}>
         
            
        </Menu>
      </Header>

      {/* Main content section with background image */}
      <Content className={"background"} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className={"overlay"}></div>
        <div className={"site-layout-content"}>
          <h1 className={"title"}>
            Welcome to Your Next.js TypeScript Landing Page
          </h1>

          <p className={"description"}>
            Get started by editing{' '}
            <code>pages/landing.tsx</code>
          </p>

          <div className={"grid"}>
            <Link href="/auth" passHref>
              <Button type="primary" className={'card'} size="large">
                Sign In / Sign Up &rarr;
              </Button>
            </Link>
            <a
              href="https://nextjs.org/docs"
              className={'card'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="default" size="large">
                Documentation &rarr;
              </Button>
            </a>
          </div>
        </div>
      </Content>

      {/* Footer section */}
      <Footer className={"footer"} style={{ textAlign: 'center' }}>
        Powered by{' '}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            className={"footer-logo"}
          />
        </a>
      </Footer>
    </Layout>
  );
};

export default LandingPage;





