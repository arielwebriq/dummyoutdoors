import React from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./categorysection.module.css"
import BackPack from "../../../images/Backpack.png"
import SchoolBag from "../../../images/schoolbag.png"
import sampleproduct from "../../../images/backpackproduct.png"
import { Link } from "gatsby"

const products = require("../../../products/outdoorproducts.json")

class CategorySection extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			category: "Backpacks",
			clicked: false,
		}
		this.onCategory = this.onCategory.bind(this)
	}
	onCategory(title) {
		this.setState({
			category: title.category,
			clicked: true,
		})
	}
	render() {
		const categoryValue =
			this.state.clicked && this.state.category === "Backpacks"
				? products.backpacks
				: products.schoolbags
		return (
			<Container>
				<h3>Select Category</h3>
				<Row>
					<Col xs={6}>
						<div
							className={styles.productarea}
							onClick={title =>
								this.onCategory({
									category: "Backpacks",
								})
							}
						>
							<img
								src={BackPack}
								alt="backpack"
								className="img-fluid mx-auto"
							/>
							<p>Backpacks</p>
						</div>
					</Col>
					<Col xs={6}>
						<div
							className={styles.productarea}
							onClick={title =>
								this.onCategory({
									category: "School Bags",
								})
							}
						>
							<img
								src={SchoolBag}
								alt="schoolbag"
								className="img-fluid mx-auto"
							/>
							<p>School Bags</p>
						</div>
					</Col>
				</Row>
				<h4>{this.state.clicked ? this.state.category : "Backpacks"}</h4>
				{categoryValue.map(item => (
					<Row key={item.name}>
						<Col xs={12}>
							<div className={styles.productlistingarea}>
								<img src={sampleproduct} className="img-fluid mx-auto" />
							</div>
							<h5 className={styles.center}>{item.name.toUpperCase()}</h5>
							<p className={styles.center}>
								{item.shortdesc} <br />
								<Link to="/contact" className={styles.center}>
									<small>Message Seller</small>
								</Link>
							</p>
						</Col>
					</Row>
				))}
			</Container>
		)
	}
}
export default CategorySection
