import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import {Route, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Education from "./components/mains/Education.tsx";
import Projects from "./components/mains/Projects.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import Awards from "./components/mains/Awards.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";

const NavMain = styled.div `
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`





export default function Root() {
    return (
        <>
            <Header/>
            <NavMain>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"experiences.html"} element={<Experiences/>}/>
                    <Route path={"education.html"} element={<Education/>}/>
                    <Route path={"projects.html"} element={<Projects/>}/>
                    <Route path={"certs.html"} element={<Certifications/>}/>
                    <Route path={"awards.html"} element={<Awards/>}/>
                </Routes>
            </NavMain>
            <Footer/>
        </>
    );
}