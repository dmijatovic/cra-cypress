import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <section class="main" data-test-id="main-page-section">
        This is my body
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
