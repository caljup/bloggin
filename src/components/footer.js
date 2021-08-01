import React from 'react'
import { IconContext } from 'react-icons'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io'

const Footer = () => (
    <div className="site-footer">
        <h5 className = "text-center">
            Blog Boy
        </h5>
        <p className = "text-center"> Follow me on social media</p>
        <div>
            <ul className="horizontal-list-social">
                <li>
                    <a href = "https://www.facebook.com/Rodeo-Round-Up-108637570735944" target = "_blank" rel = "noopener noreferrer">
                        <IconContext.Provider value={{size: "3em", className: "facebook"}}>
                            <IoLogoFacebook/>
                        </IconContext.Provider>
                    </a>
                </li>
                <li>
                    <a href = "https://twitter.com/calebupson" target = "_blank" rel = "noopener noreferrer">
                        <IconContext.Provider value={{size: "3em", className: "twitter"}}>
                            <IoLogoTwitter/>
                        </IconContext.Provider>
                    </a>
                </li>
                <li>
                    <a href = "https://www.instagram.com/rootinshootintootin" target = "_blank" rel = "noopener noreferrer">
                        <IconContext.Provider value={{size: "3em", className: "instagram"}}>
                            <IoLogoInstagram/>
                        </IconContext.Provider>
                    </a>
                </li>
                <li>
                    <a href = "https://github.com/caljup" target = "_blank" rel = "noopener noreferrer">
                        <IconContext.Provider value={{size: "3em", className: "github"}}>
                            <IoLogoGithub/>
                        </IconContext.Provider>
                    </a>
                </li>
            </ul>
        </div>
    </div>
)

export default Footer
