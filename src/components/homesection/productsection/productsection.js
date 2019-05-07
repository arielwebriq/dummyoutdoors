import React from "react"
import { Container, Row, Col } from "reactstrap"
import styles from "./productsection.module.css"

const CategorySection = () => (
	<Container>
		<Row>
			<Col xs={12}>
				<h1>Category 1 Products</h1>
				<div className={styles.productarea}>Product Image Area</div>
				<div className={styles.productarea}>Product Image Area</div>
				<div className={styles.productarea}>Product Image Area</div>
			</Col>
		</Row>
	</Container>
)

export default CategorySection
