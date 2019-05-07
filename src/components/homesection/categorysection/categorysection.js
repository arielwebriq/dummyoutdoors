import React from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./categorysection.module.css"
import BackPack from "../../../images/Backpack.png"
import SchoolBag from "../../../images/schoolbag.png"

const CategorySection = () => (
	<Container>
		<Row>
			<Col xs={6}>
				<div className={styles.productarea}>
					<img src={BackPack} className="img-fluid mx-auto" />
					<p>Backpacks</p>
				</div>
			</Col>
			<Col xs={6}>
				<div className={styles.productarea}>
					<img src={SchoolBag} className="img-fluid mx-auto" />
					<p>School Bags</p>
				</div>
			</Col>
		</Row>
	</Container>
)

export default CategorySection
