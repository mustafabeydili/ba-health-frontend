import React from "react";
import { UserOutlined ,PhoneOutlined,MailOutlined,MedicineBoxOutlined} from '@ant-design/icons';
import { Input,Button } from 'antd';
export default class TakeOffer extends React.Component {
  state = {
  };

  render() {
    return (
      <div className="take-offer">
        <span className="title">Teklif Alın</span>
        <br />
       <Input size="large" placeholder="Adınız Soyadınız" prefix={<UserOutlined />} />
        <br />
        <br />
      <Input size="large" placeholder="Telefon No" prefix={<PhoneOutlined />} />
        <br />
        <br />
        <Input size="large" placeholder="E-mail Adresi" prefix={<MailOutlined />} />
        <br />
        <br />
        <Input size="large" placeholder="Almak istediğiniz hizmet" prefix={<MedicineBoxOutlined />} />
        <br />
        <br />
        <div className="offer-button">
            <Button>BİZE DANIŞIN</Button>
        </div>
        
      </div>
    );
  }
}