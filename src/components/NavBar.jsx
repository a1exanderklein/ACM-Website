function NavBar() {  
  function ScrollSection(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  const menuItems = [
    { text: "Home", onClick: () => ScrollSection("home"), id: "home" },
    { text: "About", onClick: () => ScrollSection("about"), id: "about" },
    { text: "Sponsors", onClick: () => ScrollSection("sponsors"), id: "sponsors" },
    { text: "SIGs", onClick: () => ScrollSection("sigs"), id: "sigs" },
  ];
  
  return (
      <div className="navbar">
          <ul className="navbar_list">
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