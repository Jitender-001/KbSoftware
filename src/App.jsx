import React from 'react'

import Rout from './components/Routes'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Query from './components/Query/Query';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Rout></Rout>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
