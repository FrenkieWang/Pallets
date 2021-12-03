import React, { Component } from "react";
import EditPallet from "./EditPallet";
import palletpic from "./pallet.png";

class DisplayPallet extends Component {
  constructor(props) {
    super(props);
    this.state = { showEditButton: false };
    this.toggleEditButton = this.toggleEditButton.bind(this);
  }
  // showEditButton is given opposite boolean value.
  toggleEditButton() {
    this.setState({ showEditButton: !this.state.showEditButton });
  }
  render() {
    // The props supplied to this component from the parent.
    const palletToDisplay = this.props.palletToDisplay;
    const handleDeletePallet = this.props.handleDeletePallet;
    const handlePalletDelivered = this.props.handlePalletDelivered;

    return (
      <div className="alert alert-secondary" role="alert">
        <div className="DisplayPallet">
          <img src={palletpic} alt="This is a pallet pic for decoration" />
          <br />
          <b>Description:</b> {palletToDisplay.description}
          <br />
          <b>Shipping Weight(kg):</b> {palletToDisplay.weight}kg
          <br />
          <b>Delivery Status:</b>{" "}
          {palletToDisplay.delivered && <b>DELIVERED</b>}
          {!palletToDisplay.delivered && <b>In Progress</b>}
          <br />
          <b>Firebase ID:</b> {palletToDisplay.id}
          <br />
          <button onClick={() => handleDeletePallet(palletToDisplay.id)}>
            Delete Pallet
          </button>
          <button onClick={this.toggleEditButton}>Show/Hide Edit</button>
          {!palletToDisplay.delivered && (
            <button onClick={() => handlePalletDelivered(palletToDisplay)}>
              Set as delivered
            </button>
          )}
          {this.state.showEditButton && !palletToDisplay.delivered && (
            <EditPallet
              key={palletToDisplay.id}
              palletToEdit={palletToDisplay}
            />
          )}
        </div>
      </div>
    );
  }
}
export default DisplayPallet;
