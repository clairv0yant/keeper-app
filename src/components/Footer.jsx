import React from "react";

function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <p>&#169; Copyright {currentDate} </p>
    </footer>
  );
}

export default Footer;
