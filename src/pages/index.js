import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/homesection/categorysection/categorysection"
// import { Container, Row, Col } from "reactstrap"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Outdoor Shop" keywords={[`gatsby`, `application`, `react`]} />
    <Category data={data.allProductsJson.edges.map(item => item.node)} />
  </Layout>
)

export default IndexPage

export const indexQuery = graphql`
  query {
    allProductsJson {
      edges {
        node {
          id
          backpacks {
            id
            name
            shortdesc
            image {
              id
              publicURL
            }
          }
          schoolbags {
            name
            shortdesc
            liters
            price
            image {
              id
              publicURL
            }
          }
        }
      }
    }
  }
`
