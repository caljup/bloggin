import React from "react"
import { Link } from 'gatsby'
import { Col } from 'reactstrap'
import FeedLayout from "../components/feedlayout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <FeedLayout pageTitle = "Something went wrong...">
    <SEO title="404: Not found" />
    <Col md = '12' className = 'were-going-home'>
      <Link className="btn btn-primary text-uppercase" to = {'/'}>
        Go Home
      </Link>
    </Col>
  </FeedLayout>
)

export default NotFoundPage
