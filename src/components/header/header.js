import React from "react"
import styles from "./header.module.css"
import { Container } from "reactstrap"
import Menu from "../../images/menu.png"

const Header = () => (
	<div className={styles.header}>
		<Container>
			<img src={Menu} className="img-fluid" alt="outdoor product burger menu" />
			<span>Outdoor Shop</span>
		</Container>
	</div>
)

export default Header
