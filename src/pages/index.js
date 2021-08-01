import React from "react"
import SEO from "../components/seo"
import SinglePageLayout from "../components/singlepagelayout"
import PanelBlock from "../components/panelblock"


const IndexPage = () => (
  <SinglePageLayout pageTitle = "Rodeo Round Up" className= "rodeo-round-up">
    <SEO title = "The Round Up Home"/>
    <PanelBlock></PanelBlock>
  </SinglePageLayout>
)


export default IndexPage
