import React from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./categorysection.module.css"
import BackPack from "../../../images/Backpack.png"
import SchoolBag from "../../../images/schoolbag.png"
// import sampleproduct from "../../../images/backpackproduct.png"
import { Link } from "gatsby"

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
				? this.props.data[0].backpacks
				: this.props.data[0].schoolbags
		return (
			<Container>
				<span>SELECT CATEGORY</span>
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
				<h5>
					{this.state.clicked ? this.state.category.toUpperCase() : "BACKPACKS"}
				</h5>
				{categoryValue.map(item => (
					<Row key={item.name}>
						<Col xs={12}>
							<div className={styles.productlistingarea}>
								<h5 className={styles.center}>{item.name.toUpperCase()}</h5>
								<img
									src={item.image.publicURL}
									className="img-fluid mx-auto"
									alt="sample"
								/>
								<p className={styles.center}>
									{item.shortdesc}
									<br />
									<Link
										to="/contact"
										className={`btn ${styles.center} ${styles.secondarybtn}`}
									>
										<small>MESSAGE SELLER</small>
									</Link>
								</p>
							</div>
						</Col>
					</Row>
				))}
			</Container>
		)
	}
}
export default CategorySection

