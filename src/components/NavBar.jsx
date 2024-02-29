function NavBar() {  
    function ScrollHome() {
      const element = document.getElementById("");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  
    function ScrollAbout() {
      const element = document.getElementById("");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  
    function ScrollSponsors() {
      const element = document.getElementById("");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  
    function ScrollSigs() {
      const element = document.getElementById("");
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  
    const menuItems = [
      { text: "Home", onClick: ScrollHome, id: "home" },
      { text: "About", onClick: ScrollAbout, id: "about" },
      { text: "Sponsors", onClick: ScrollSponsors, id: "sponsors" },
      { text: "SIGs", onClick: ScrollSigs, id: "sigs" },
    ];
  
    return (
        <div className="navbar">
            <ul className="navbar_list">
                <img className="navbar_list_child" src={require("../assets/logo.png")} alt="ACM Logo"/>
                {menuItems.map((item) => (
                    <li key={item.text}>
                        <a href="/#" className="navbar_list_child" onClick={item.onClick}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
  
  export default NavBar;