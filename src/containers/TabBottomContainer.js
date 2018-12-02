import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  TabBottom,
  Button,
  Description,
  Img,
  Inline
} from "../styles/components";
import lock from "../img/sprite.lock-silver.png";
import comission from "../img/sprite.nocomission-silver.png";

class TabBottomContainer extends PureComponent {
  render() {
    const { totalPrice } = this.props;
    return (
      <TabBottom>
        <Button disabled={!totalPrice} cols="1/-1">
          Оплатить
        </Button>
        <Inline align="end">
          <Img width={"20px"} src={comission} />
          &nbsp;
          <Description>
            Нет комиссии при оплате банковскими картами Яндекс.Деньгами и Qiwi
          </Description>
        </Inline>
        <Inline align="end">
          <Img width={"20px"} src={lock} />
          &nbsp;
          <Description>
            Все платежи защищены в соответствии с международными стандартами
          </Description>
        </Inline>
      </TabBottom>
    );
  }
}

const mapStateToProps = ({ totalPrice }) => ({ totalPrice });

TabBottomContainer.propTypes = {
  totalPrice: PropTypes.number
};

export default connect(mapStateToProps)(TabBottomContainer);
