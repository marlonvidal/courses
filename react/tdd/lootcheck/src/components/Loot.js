import React from "react";
import { connect } from "react-redux";
import { fetchBitcoin } from "../actions/bitcoin";

export class Loot extends React.Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) {
      return "";
    }
    console.log(this.props.balance);
    console.log(bitcoin.bpi.USD.rate);

    return (
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10)
    );
  };

  render() {
    return (
      <div>
        <h3>Bitcoin Balance: {() => this.computeBitcoin()}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    fetchBitcoin
  }
)(Loot);
