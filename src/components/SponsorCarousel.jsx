import * as React from "react";

function SponsorCarousel() {
    const sponsors = [
        { text: "Roblox", link: "https://www.roblox.com", imgSrc: require("../assets/roblox.png")},
        { text: "Bloomberg", link: "https://www.bloomberg.com", imgSrc: require("../assets/bloom.png") },
        { text: "Centene", link: "https://www.centene.com", imgSrc: require("../assets/centene.png") },
        { text: "Meta", link: "https://www.meta.com", imgSrc: require("../assets/meta.png") },
        { text: "Accenture", link: "https://www.accenture.com/us-en", imgSrc: require("../assets/accenture.png") },
        { text: "Grove Street Games", link: "https://www.grovestreetgames.com", imgSrc: require("../assets/grove.png") },
        { text: "Whatnot", link: "https://www.whatnot.com", imgSrc: require("../assets/whatnot.png") },
        { text: "XRP Ledger", link: "https://www.xrpl.org", imgSrc: require("../assets/xrp.png") },

        { text: "Roblox", link: "https://www.roblox.com", imgSrc: require("../assets/roblox.png")},
        { text: "Bloomberg", link: "https://www.bloomberg.com", imgSrc: require("../assets/bloom.png") },
        { text: "Centene", link: "https://www.centene.com", imgSrc: require("../assets/centene.png") },
        { text: "Meta", link: "https://www.meta.com", imgSrc: require("../assets/meta.png") },
        { text: "Accenture", link: "https://www.accenture.com/us-en", imgSrc: require("../assets/accenture.png") },
        { text: "Grove Street Games", link: "https://www.grovestreetgames.com", imgSrc: require("../assets/grove.png") },
        { text: "Whatnot", link: "https://www.whatnot.com", imgSrc: require("../assets/whatnot.png") },
        { text: "XRP Ledger", link: "https://www.xrpl.org", imgSrc: require("../assets/xrp.png") },
    ];

    return (
        <div className="carousel">
            <div className="carousel-track">
                {sponsors.map((item) => (
                    <a className="slide" href={item.link}>
                        <img className="slide-img" src={item.imgSrc} alt={item.text} />
                    </a>
                ))}
            </div>
        </div>
    )
};

export default SponsorCarousel;