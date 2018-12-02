import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Section,
  SectionTitle,
  Label,
  Description,
  Inline
} from "../styles/components";
import { Checkbox } from "../components/Checkbox";
import { toggleDiscountStatus, updateTotalPrice } from "../actions";

class BottomSectionContainer extends PureComponent {
  parsePrice = price => {
    if (!price) {
      return;
    }
    const strPrice = `${price}`;
    const offset = 3;
    const firstPart = strPrice.slice(0, strPrice.length - offset);
    const lastPart = strPrice.slice(strPrice.length - offset, strPrice.length);
    return `${firstPart} ${lastPart}`;
  };

  toggleDiscountStatus = () => {
    const { toggleDiscountStatus, updateTotalPrice } = this.props;
    toggleDiscountStatus();
    updateTotalPrice(150);
  };

  render() {
    const { discount, price, totalPrice, autopay } = this.props;

    return (
      <Section>
        <SectionTitle>Итого к оплате (за {price.period})</SectionTitle>
        <Inline>
          {discount && (
            <>
              <Label gray fontWeight={"bold"} fontSize={"4.5rem"}>
                {this.parsePrice(price.val)} + 150
              </Label>
              <Label gray fontWeight={"bold"} fontSize={"4.5rem"}>
                &nbsp;=&nbsp;
              </Label>
            </>
          )}

          <Label fontWeight={"bold"} fontSize={"4.5rem"}>
            {this.parsePrice(totalPrice)}
          </Label>
          <Label>руб</Label>
        </Inline>
        {autopay && <Description>Далее 120 руб. в месяц</Description>}
        <Checkbox checked={discount} onChange={this.toggleDiscountStatus}>
          <Label>
            Добавить подписку на скидку 5% на весь ассортимент товара
          </Label>
          <Description cols={"2/-1"}>
            Срок действия подписки 6 месяцев. Стоимость подписки 150 руб.
          </Description>
        </Checkbox>
      </Section>
    );
  }
}

BottomSectionContainer.propTypes = {
  price: PropTypes.object,
  toggleDiscountStatus: PropTypes.func,
  updateTotalPrice: PropTypes.func,
  discount: PropTypes.bool,
  totalPrice: PropTypes.number,
  autopay: PropTypes.bool
};

const mapStateToProps = ({ price, discount, totalPrice, autopay }) => ({
  price,
  discount,
  totalPrice,
  autopay
});

export default connect(
  mapStateToProps,
  { toggleDiscountStatus, updateTotalPrice }
)(BottomSectionContainer);
