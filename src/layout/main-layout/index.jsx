import { Layout, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderUI from '../../components/header';
import SideBarUI from '../../components/side-bar';

import cls from "./mainloayout.module.scss"
const {  Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
        <SideBarUI collapsed={collapsed} />
        <Layout>
            <Content
                style={{
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
                >
                <HeaderUI
                    setCollapsed={setCollapsed}
                    collapsed={collapsed}
                    colorBgContainer={colorBgContainer}
                />          
                <div className={cls.MainLayout__conent}>
                  <Outlet />
               </div>
            </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;