import React from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "../helper";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    const { gifts } = this.state;
    const maxId = max_number(gifts);
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    this.setState({ gifts: this.state.gifts.filter(gift => gift.id !== id) });
  };

  render() {
    const { gifts } = this.state;

    const giftList = gifts.map(gift => {
      return <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />;
    });

    return (
      <div>
        <h2>Gift List</h2>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
        <div className="gift-list">{giftList}</div>
      </div>
    );
  }
}

export default App;
