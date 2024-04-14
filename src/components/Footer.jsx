import * as React from "react";
import { FaDiscord, FaInstagram, FaLinkedin  } from "react-icons/fa";


function Footer() {
    const socials = [
        { text: "discord", link: "https://discord.gg/wcYxbcgbVN", fa: <FaDiscord/>},
        { text: "linkedin", link: "https://www.linkedin.com/company/ufacm/", fa: <FaLinkedin/>},
        { text: "instagram", link: "https://www.instagram.com/uf.acm/", fa: <FaInstagram/>},
    ];

    return (
        <div className="footer py-5 opacity-80">
            <div className="footer-text text-xs">
                <img className="self-center w-1/6" src={require("../assets/logo.png")} alt='ACM Logo'/>
                <p className="footer-line leading-5 md:text-s md:leading-7">University of Florida Association for Computing Machinery</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">“The Fishbowl” Malachowsky Hall, Gainesville, FL</p>
                <p className="footer-line leading-5 md:text-s md:leading-7">Designed by the <b>ACMake Design Team</b></p>
            </div>
            <div className="footer-socials">
                {socials.map((item) => (
                    <a className="social-button p-2" href={item.link}>
                        {item.fa}
                    </a>
                ))}
            </div>
        </div>
    )
};

export default Footer;