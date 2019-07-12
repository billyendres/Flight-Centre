import React, { Component, Fragment } from "react";
import "./styles/styles.css";
import GrandEuro from "./GrandEuro";
import SouthAm from "./SouthAm";
import Egypt from "./Egypt";

class TourDetails extends Component {
	render() {
		return (
			<Fragment>
				<div className="select">
					<span className="tours">Select a Tour</span>
					<br />
					<span style={{ fontSize: "0.8em", fontWeight: "bold" }}>3 tours</span>{" "}
					<span style={{ fontSize: "0.8em" }}>found</span>
				</div>
				<div className="container">
					<GrandEuro />
					<SouthAm />
					<Egypt />
				</div>
			</Fragment>
		);
	}
}

export default TourDetails;
