import React from "react";
import { connect } from "react-redux";
import { withdraw, deposit } from "../actions/balance";

export class Wallet extends React.Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  setBalance = event =>
    this.setState({ balance: parseInt(event.target.value) });
  deposit = () => this.props.deposit(this.state.balance);
  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div>
        <h2 className="balance">Balance: {this.props.balance}</h2>
        <br />
        <input className="input-wallet" onChange={this.setBalance} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deposit: balance => {
      dispatch(deposit(balance));
    },
    withdraw: balance => {
      dispatch(withdraw(balance));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet);
