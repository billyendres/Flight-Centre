import React, { Component, Fragment } from "react";
import "./styles/styles.css";
import GrandImg from "./images/GrandImg.png";
//Bootstrap Imports
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//JSON Data
import TourInfo from "./jsonFile/sample_data.json";
//npm packages
import StarRatings from "react-star-ratings";
const dateFormat = require("dateformat");
console.log(TourInfo.results[0]);
//Destructuring JSON data
const data = TourInfo.results[0];
//Formatting date while remaining dynamic from json data
const date_start = dateFormat(data.date_start, "dd mmm yyyy");
const date_end = dateFormat(data.date_end, "dd mmm yyyy");

// REACT COMPONENT
class GrandEuro extends Component {
	state = { on: false, button: true, modal: false, show: false };

	//Event Handlers
	toggleDiv = () => {
		this.setState({ on: !this.state.on });
	};

	removeButton = () => {
		this.setState({ button: !this.state.button });
	};

	//Modal Popup
	handleClose = () => {
		this.setState({ show: false });
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	render() {
		return (
			// Card Setup all components dynamically imported from JSON file
			<Fragment>
				<div className="card">
					<img className="main-img" alt={data.tour_name} src={GrandImg} />
					<div className="margin">
						<h1 className="header">{data.tour_name}</h1>
						<StarRatings
							className="rating"
							rating={data.rating}
							starRatedColor="grey"
							starEmptyColor="white"
							starDimension={"17px"}
							starSpacing={"1px"}
							numberOfStars={5}
							name="rating"
						/>
						<p className="dates">
							<i style={{ marginRight: "0.4em" }} className="fas fa-calendar-week" />
							{date_start} - {date_end}
						</p>
						<p className="duration">
							<i style={{ marginRight: "0.3em" }} className="far fa-clock" />
							{data.duration} Days
						</p>

						{/* Mapping through itinerary & handling state change*/}
						<div className="itinerary">
							<i style={{ marginRight: "0.5em" }} className="fas fa-map-marker-alt" />
							{data.itinerary.slice(0, 6).map((itinerary, index) => {
								return <Fragment key={index}>{itinerary}, </Fragment>;
							})}
							{this.state.on && (
								<span>
									{data.itinerary.slice(6, 16).map((itinerary, index) => {
										return <Fragment key={index}>{itinerary}, </Fragment>;
									})}
									{data.itinerary[16]}
								</span>
							)}
							{this.state.button && (
								<span onMouseOver={this.removeButton}>
									<span
										style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}
										onMouseOver={this.toggleDiv}
									>
										...+ 11 More
									</span>
								</span>
							)}
							{!this.state.button && (
								<span onMouseLeave={this.removeButton}>
									<span
										style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}
										onMouseLeave={this.toggleDiv}
									>
										...See Less
									</span>
								</span>
							)}
						</div>

						<div
							style={{
								borderBottom: "1px solid grey",
								marginTop: "1em",
								marginBottom: "0.5em",
								marginRight: "5%"
							}}
						/>
						{/* Modal popup/ state change */}
						<span onMouseEnter={this.handleShow} className="info">
							from <i className="fas fa-info-circle" />
						</span>
						<Modal
							style={{ marginTop: "18em" }}
							show={this.state.show}
							onHide={this.handleClose}
						>
							<Modal.Header closeButton style={{ fontWeight: "700" }}>
								{data.tour_name}
							</Modal.Header>
							<Modal.Body>Prices are per person and in Australian Dollars</Modal.Body>
							<Modal.Footer />
						</Modal>
						<Button
							style={{
								marginLeft: "38%",
								marginTop: "2%",
								paddingLeft: "8%",
								paddingRight: "8%",
								paddingTop: "3%",
								paddingBottom: "3%",
								fontWeight: "700"
							}}
							variant="primary"
						>
							View Tour
						</Button>
						<h1 className="price">
							<span style={{ fontSize: "0.6em", fontWeight: "300" }}>$ </span>
							{data.price}
						</h1>
					</div>
				</div>
			</Fragment>
		);
	}
}

// Export for use in TourDetails component
export default GrandEuro;
