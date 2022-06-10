import facebookIcon from "../images/Facebook Icon.png"
import githubIcon from "../images/GitHub Icon.png"
import instagramIcon from "../images/Instagram Icon.png"
import twitterIcon from "../images/Twitter Icon.png"

const Footer = () => {
    return (
        <div className="footer">
            <a href="">
                <img src={twitterIcon} />
            </a>
            <a>
                <img src={facebookIcon} />
            </a>
            <a href="https://www.instagram.com/serena.s.huang/">
                <img src={instagramIcon} />
            </a>
            <a href="https://github.com/serenahuang225">
                <img src={githubIcon} />
            </a>
        </div>
    )
}

export default Footer;