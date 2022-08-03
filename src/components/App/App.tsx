import React from "react";
import classNames from "classnames/bind";
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
// import { apiSlice } from '../../store/api/apiSlice';
// import { MovieProvider } from '../../context/MovieContext/MovieContext';
import { ErrorBoundary } from "../../hoc/ErrorBoundary/ErrorBoundary";
import { Options } from "../Options/Options";
import { Hero } from "../Hero/Hero";
import { Results } from "../Results/Results";
import { Footer } from "../Footer/Footer";

import styles from "./App.module.scss";

const cx = classNames.bind(styles);

export const App = () => {
  return (
    <div className={cx(styles.app)}>
      <ErrorBoundary>
        {/* <ApiProvider api={apiSlice}> */}
        {/* <MovieProvider> */}
        <Hero />
        <Options />
        <Results />
        <Footer />
        {/* </MovieProvider> */}
        {/* </ApiProvider> */}
      </ErrorBoundary>
    </div>
  );
};
