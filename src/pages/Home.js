import React, { useEffect, useState } from "react";

import Paragraph from "../components/text/Paragraph";
import axios from "axios";

function Home(props) {
  const [state, setState] = useState({
    pageTitle: "Loading...",
    paragraphs: []
  });
  useEffect(() => {
    axios
      .get("/api/home")
      .then(({ data }) => {
        setState(data);
      })
      .catch(err => {
        setState({
          pageTitle: "Fetch data failed",
          paragraphs: []
        });
      });
  }, []);
  const getPs = paragraphs => {
    const p = paragraphs.map((item, pos) => {
      return <Paragraph key={pos} {...item} />;
    });
    return p;
  };
  return (
    <>
      <h1 className="page-title" data-test-id="home-page-title">
        {state.pageTitle}
      </h1>
      <section className="page-body">
        {getPs(state.paragraphs)}
        {/* <Paragraph title="Test title" content="Test context here" /> */}
      </section>
    </>
  );
}

export default Home;
