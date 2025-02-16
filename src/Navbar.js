import React, { useState, useEffect } from "react";

function Navbar() {
  // State to track whether the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for the scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // If scrolled, set isScrolled to true
      } else {
        setIsScrolled(false); // If at the top, set isScrolled to false
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleThirdClick = () => {
    window.location.href = "/another-page"; // Replace with your actual route
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: isScrolled ? 'rgba(212, 212, 212, 1)' : 'transparent', // Apply rgba color on scroll
        transition: 'background-color 0.3s ease', // Smooth transition
      }}
    >
      <div className="logo">LOGO</div>
      <ul className="nav-links">
  <li>
    <a href="#">Lorem Ipsum <span style={{ marginLeft: "5px", fontSize: "14px" }}><i className="bi bi-chevron-down"></i></span></a>
  </li>
  <li>
    <a href="#">Lorem Ipsum <span style={{ marginLeft: "5px", fontSize: "14px" }}><i className="bi bi-chevron-down"></i></span></a>
  </li>
  <li onClick={handleThirdClick} style={{ cursor: "pointer" }}>
    <a href="#">Lorem Ipsum <span style={{ marginLeft: "5px", fontSize: "14px" }}><i className="bi bi-chevron-down"></i></span></a>
  </li>
</ul>

      <button className="btn-signin">Sign In</button>
    </nav>
  );
}

export default Navbar;
