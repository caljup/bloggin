import React from 'react'
import { Row, Col } from 'reactstrap'
import MainPost from './mainpost'
import SecondPost from './secondarypost'
import ThirdPost from './thirdpost'
import ThreePost from './threepost'

const PanelBlock = () => (
    <div>
        <Row>
            <Col>
                <MainPost/>
                <SecondPost/>
                <ThirdPost/>
                <ThreePost/>
            </Col>
        </Row>
    </div>
)

export default PanelBlock