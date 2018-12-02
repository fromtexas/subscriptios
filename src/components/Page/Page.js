import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Main, Tab, Container } from "../../styles/components";
import TopSectionContainer from "../../containers/TopSectionContainer";
import MiddleSectionContainer from "../../containers/MiddleSectionContainer";
import BottomSectionContainer from "../../containers/BottomSectionContainer";
import TabBottomContainer from "../../containers/TabBottomContainer";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

function Page({ payment, totalPrice }) {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Main>
          <Tab>Клуб выгодных покупок</Tab>
          <TopSectionContainer />
          {payment && <MiddleSectionContainer />}
          {!!totalPrice && <BottomSectionContainer />}
          <TabBottomContainer />
        </Main>
      </Container>

      <Footer />
    </React.Fragment>
  );
}

Page.propTypes = {
  payment: PropTypes.string,
  totalPrice: PropTypes.number
};

const mapStateToProps = ({ payment, totalPrice }) => ({ payment, totalPrice });

export default connect(mapStateToProps)(Page);
