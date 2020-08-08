import React, { Fragment, useEffect } from "react";
import BeforeLoggedInHeader from "../../components/header/BeforeLoggedInHeader";
import AfterLoggedInHeader from "../../components/header/AfterLoggedInHeader";
import Footer from "../../components/footer/Footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Blog = ({ auth: { isAuthenticated } }) => {
  let headerComponent = <BeforeLoggedInHeader />;
  if (isAuthenticated) {
    headerComponent = <AfterLoggedInHeader />;
  }
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.retainable.io/assets/retainable/rss-embed/retainable.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const style = document.createElement("link");
    style.href =
      "https://www.retainable.io/assets/retainable/rss-embed/retainable.css";
    style.rel = "stylesheet";
    style.type = "text/css";
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Fragment>
      {" "}
      {headerComponent}
      <div className="container blog-class">
        <div
          id="retainable-rss-embed"
          data-rss="https://medium.com/feed/collegepass"
          data-maxcols="4"
          data-layout="grid"
          data-poststyle="modal"
          data-readmore="Read the rest"
          data-buttonclass="btn btn-primary"
          data-offset="-200"
        ></div>
      </div>
      <Footer></Footer>{" "}
    </Fragment>
  );
};
Blog.propTypes = { auth: PropTypes.object.isRequired };
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(Blog);
