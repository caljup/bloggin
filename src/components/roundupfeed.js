import React from 'react'
import { Link } from 'gatsby'
import { Col } from 'reactstrap'
import Img from 'gatsby-image'

const RoundUpFeed = ({ title, slug, fluid}) => {
    return (
        <Col md='3' className = "rodeo-feed-item">
            <div className = "rodeo-feed-images">
                <Link to ={`/${slug}`}>
                    <Img className = "rodeo-feed-images" fluid = {fluid} />
                </Link>
            </div>
            <div className = "rodeo-feed-title">
                <Link to = {`/${slug}`}>
                    {title}
                </Link>
            </div>
        </Col>
    )
}

export default RoundUpFeed