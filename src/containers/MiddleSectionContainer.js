import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Section,
  SectionTitle,
  Label,
  Description,
  Price,
  Inline
} from "../styles/components";
import { Checkbox } from "../components/Checkbox";
import { PriceItem } from "../components/PriceItem";
import {
  selectPricePerTime,
  toggleAutopayStatus,
  updateTotalPrice
} from "../actions";

class MiddleSectionContainer extends PureComponent {
  checkPaymentType = () => {
    const paymentTypes = ["paymentCard", "yandexMoney", "payPal", "sms"];
    return paymentTypes.includes(this.props.payment) && !this.props.gift;
  };

  selectPricePerTime = price => {
    const { selectPricePerTime, updateTotalPrice } = this.props;
    selectPricePerTime(price);
    updateTotalPrice();
  };

  render() {
    const { toggleAutopayStatus, autopay, price } = this.props;
    return (
      <Section cols={4}>
        <SectionTitle>На какой срок</SectionTitle>
        <PriceItem
          onClick={this.selectPricePerTime}
          selected={price}
          price={{ val: "2880", period: "2 года" }}
        >
          <Label>2 года</Label>
          <Price>2 880 руб.</Price>
          <Inline>
            <Label fontSize={"3rem"}>120</Label>
            <Label>&nbsp;руб./мес</Label>
          </Inline>
        </PriceItem>
        <PriceItem
          onClick={this.selectPricePerTime}
          selected={price}
          price={{ val: "1500", period: "1 год" }}
        >
          <Label>1 год</Label>
          <Price>1 500 руб.</Price>
          <Inline>
            <Label fontSize={"3rem"}>125</Label>
            <Label>&nbsp;руб./мес</Label>
          </Inline>
        </PriceItem>
        <PriceItem
          onClick={this.selectPricePerTime}
          selected={price}
          price={{ val: "780", period: "6 месяцев" }}
        >
          <Label>6 месяцев</Label>
          <Price>780 руб.</Price>
          <Inline>
            <Label fontSize={"3rem"}>130</Label>
            <Label>&nbsp;руб./мес</Label>
          </Inline>
        </PriceItem>
        <Description width={"60%"} cols={"1/-1"}>
          В конце срока подписка продлится автоматически. Вы можете выключить
          автопроделние в любой момент в настройках или отменить его.
        </Description>
        {this.checkPaymentType() && (
          <Checkbox checked={autopay} onChange={toggleAutopayStatus}>
            <Label>Продлевать подписку автоматически</Label>
            <Description cols={"2/-1"}>
              Оплачивая подписку, я принимаю условия оплаты, указанные в оферте
              и условия автоматического продления подписки на месяц вперед.
            </Description>
          </Checkbox>
        )}
      </Section>
    );
  }
}

const mapStateToProps = ({ autopay, price, payment, gift }) => ({
  autopay,
  price,
  payment,
  gift
});

MiddleSectionContainer.propTypes = {
  autopay: PropTypes.bool,
  price: PropTypes.object,
  payment: PropTypes.string,
  gift: PropTypes.bool,
  selectPricePerTime: PropTypes.func,
  toggleAutopayStatus: PropTypes.func,
  updateTotalPrice: PropTypes.func
};

export default connect(
  mapStateToProps,
  { selectPricePerTime, toggleAutopayStatus, updateTotalPrice }
)(MiddleSectionContainer);
