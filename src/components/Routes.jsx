import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./Home/Home";
import About from "./About/About";
import Services from './Services/Services';
import Reseller from "./Reseller/Reseller";
import Contact from "./Contact/Contact";
import Support from "./Support/Support";


function Rout(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reseller" element={<Reseller />} />
                <Route path="/support" element={<Support />} />
            </Routes>

        </>
    )
}

export default Rout;