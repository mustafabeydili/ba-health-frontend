import React from "react";
import { Menu, Button } from 'antd';
import { HomeOutlined, RiseOutlined , AimOutlined, MenuFoldOutlined,MenuUnfoldOutlined ,FileImageOutlined,CarOutlined,BranchesOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom"; 
const { SubMenu } = Menu;

export default class LeftSideMenu extends React.Component {
  state = {
    current: 'main',
    collapsed: false
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {current,collapsed} = this.state;
    return (
      <div className={"left-side-menu".concat(collapsed ? ' collapsed': '')} >
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="vertical" inlineCollapsed={collapsed} theme="light">
        <Menu.Item key="main" icon={<HomeOutlined/>}>
          <Link to="/">Ana Sayfa</Link>
        </Menu.Item>
        <Menu.Item key="healthOffer" icon={<RiseOutlined />}>
          <Link to="/healthOffer">Sağlık Teklifi</Link>
        </Menu.Item>
        <Menu.Item key="acommodationOffer" icon={<AimOutlined />}>
          <Link to="/accommodationOffer">Konaklama Teklifi</Link>
        </Menu.Item>
        <Menu.Item key="travelOffer" icon={<FileImageOutlined />}>
          <Link to="/travelOffer">Seyahat / Gezi Teklifi</Link>
        </Menu.Item>
        <Menu.Item key="rentaCar" icon={<CarOutlined />}>
          <Link to="/rentaCar">Rent A Car</Link>
        </Menu.Item>
        <SubMenu
            key="sub2"
            title={
              <span>
                <BranchesOutlined />
                <span>Diğer</span>
              </span>
            }
          >
            <Menu.Item key="9">İş Ortaklarımız</Menu.Item>
            <Menu.Item key="10">Hasta Rehberi</Menu.Item>
            <Menu.Item key="11">Biz Kimiz</Menu.Item>
            <Menu.Item key="12">İletişim</Menu.Item>

          </SubMenu>
        
      </Menu>
      <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </div>
    );
  }
}