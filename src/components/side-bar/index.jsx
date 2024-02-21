import {
    UnorderedListOutlined,
    LineChartOutlined,
    MoneyCollectOutlined
  } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/side-bar';
const {  Sider } = Layout;

export default function SideBarUI({collapsed}) {
    const navigate = useNavigate()
  return (
    <Sider
      style={{
      
      "height": "100vh",
    
    }} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
            theme="dark"
            mode="inline"
      
           defaultSelectedKeys={['1']}
            items={[
            {
                key: '1',
                icon: <UnorderedListOutlined />,
                label: 'Дневник',
                onClick:()=>navigate('/')
            },
                {
                key: '2',
                icon: <LineChartOutlined />,
                label: 'График',
                onClick:()=>navigate('/grafik')
            },
           
            {
                key: '3',
                icon: <MoneyCollectOutlined />,
                label: 'Актив',
                onClick:()=>navigate('/')
              }
              
          ]}
        />
      </Sider>
  )
}
