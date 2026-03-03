import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.footer`
    padding: 1vh;
    background-color: #59502d;
    color: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.7vw);
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Kevin Kupeli <Link to="">Credits</Link> &#169;</p>
        </StyledFooter>
    )
}