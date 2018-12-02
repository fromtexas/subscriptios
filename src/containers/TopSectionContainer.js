import React, { PureComponent } from "react";
import {
  selectPaymentMethod,
  toggleGiftStatus,
  toggleAutopayStatus
} from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Section,
  SectionTitle,
  Label,
  Description,
  Img
} from "../styles/components";
import { PaymentItem } from "../components/PaymentItem";
import { Checkbox } from "../components/Checkbox";
import paymentCard from "../img/sprite.payment-cards.png";
import yandexMoney from "../img/sprite.payment-yandexmoney.png";
import payPal from "../img/sprite.payment-paypal.png";
import webmoney from "../img/sprite.payment-webmoney.png";
import qiwi from "../img/sprite.payment-qiwi.png";

class TopSectionContainer extends PureComponent {
  select = method => {
    const { selectPaymentMethod } = this.props;
    selectPaymentMethod(method);
    this.unchekAutopayStatus();
  };

  unchekAutopayStatus = () => {
    const { autopay, toggleAutopayStatus } = this.props;
    autopay && toggleAutopayStatus();
  };

  toggleGiftStatus = () => {
    const { toggleGiftStatus } = this.props;
    toggleGiftStatus();
    this.unchekAutopayStatus();
  };

  render() {
    const { payment, gift } = this.props;
    return (
      <Section cols={4}>
        <SectionTitle>Выберите способ оплаты</SectionTitle>
        <PaymentItem
          onClick={this.select}
          selected={payment}
          type="paymentCard"
        >
          <Img src={paymentCard} alt="paymentCard" />
        </PaymentItem>
        <PaymentItem
          onClick={this.select}
          selected={payment}
          type="yandexMoney"
        >
          <Img src={yandexMoney} alt="yandexMoney" />
        </PaymentItem>
        <PaymentItem onClick={this.select} selected={payment} type="payPal">
          <Img src={payPal} alt="payPal" />
        </PaymentItem>
        <PaymentItem onClick={this.select} selected={payment} type="webmoney">
          <Img src={webmoney} alt="webmoney" />
        </PaymentItem>
        <PaymentItem onClick={this.select} selected={payment} type="sms">
          <Label>SMS</Label>
          <Description>Только для России</Description>
        </PaymentItem>
        <PaymentItem onClick={this.select} selected={payment} type="qiwi">
          <Img src={qiwi} alt="qiwi" />
        </PaymentItem>
        {!gift && (
          <PaymentItem onClick={this.select} selected={payment} type="giftCode">
            <Label>Подарочный</Label>
            <Label>код</Label>
          </PaymentItem>
        )}
        {payment !== "giftCode" && (
          <Checkbox checked={gift} onChange={this.toggleGiftStatus}>
            <Label>Покупаю подписку в подарок</Label>
          </Checkbox>
        )}
      </Section>
    );
  }
}

TopSectionContainer.propTypes = {
  gift: PropTypes.bool,
  payment: PropTypes.string,
  selectPaymentMethod: PropTypes.func,
  toggleGiftStatus: PropTypes.func,
  autopay: PropTypes.bool
};

const mapStateToProps = ({ gift, payment, autopay }) => ({
  gift,
  payment,
  autopay
});

export default connect(
  mapStateToProps,
  { selectPaymentMethod, toggleGiftStatus, toggleAutopayStatus }
)(TopSectionContainer);
