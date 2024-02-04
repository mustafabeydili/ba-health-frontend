import React from "react";
import { Menu } from 'antd';
import { BranchesOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom"; 
const { SubMenu } = Menu;

export default class Header extends React.Component {
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
    const {current,} = this.state;
    return (
      <div className={"header"} >
        <div className="row">
          <div className="title col-lg-2 col-md-1 col-sm-12 col-xs-12"> 
            <span>HEALTHGATE</span>
          </div>
          <div className="col-lg-10 col-md-11 col-sm-12 col-xs-12">
              <Menu onClick={this.handleClick} className="menu" selectedKeys={[current]} mode="horizontal" theme="light" >
                <Menu.Item key="main">
                  <Link to="/">Ana Sayfa</Link>
                </Menu.Item>
                <Menu.Item key="healthOffer">
                  <Link to="/healthOffer">İş Ortaklarımız</Link>
                </Menu.Item>
                <Menu.Item key="acommodationOffer">
                  <Link to="/accommodationOffer">Hasta Rehberi</Link>
                </Menu.Item>
                <Menu.Item key="travelOffer" >
                  <Link to="/travelOffer">Biz Kimiz?</Link>
                </Menu.Item>
                <Menu.Item key="rentaCar">
                  <Link to="/rentaCar">İletişim</Link>
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
          </div>
        </div>
    
      </div>
    );
  }
}