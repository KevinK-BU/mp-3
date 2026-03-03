
import {Link} from 'react-router';
import styled from "styled-components";

const NavWrapper = styled.nav`
    width: 30%;
    background-color: #797b43;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const NavUL = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        height: 5vh;
    }
`
const NavULLi = styled.li`
    margin: 6vh 0;
    background-color: #59502d;
    padding: 1vh;
    border-bottom: white solid 0.12vh;
    @media screen and (max-width: 1000px) {
        margin: auto;
        background-color: #59502d;
        padding: 1%;
        border-radius: 12%;
    }
`
const StyledLink = styled(Link) `
    color: white;
    font-size: calc(2px + 1vw);
    text-decoration: none;
`

export default function Nav() {
    return (
        <NavWrapper>
            <NavUL>
                <NavULLi><StyledLink to="/">Home</StyledLink></NavULLi>
                <NavULLi><StyledLink to="/experiences.html">Experiences</StyledLink></NavULLi>
                <NavULLi><StyledLink to="/education.html">Education</StyledLink></NavULLi>
                <NavULLi><StyledLink to="/projects.html">Projects</StyledLink></NavULLi>
                <NavULLi><StyledLink to= "/certs.html">Certifications</StyledLink></NavULLi>
                <NavULLi><StyledLink to= "/awards.html">Awards</StyledLink></NavULLi>
            </NavUL>
        </NavWrapper>
    )
}