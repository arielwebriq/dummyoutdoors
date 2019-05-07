import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/homesection/categorysection/categorysection"
import ProductsSection from "../components/homesection/productsection/productsection"
// import { Container, Row, Col } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Outdoor Shop" keywords={[`gatsby`, `application`, `react`]} />
    <Category />
    <ProductsSection />
  </Layout>
)

export default IndexPage
