import React from 'react';
import './assets/scss/themes.scss';
import Route from './Routes';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <React.Fragment>
        <Route />
      </React.Fragment>
    </>
  );
}

export default App;
