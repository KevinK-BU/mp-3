import styled from "styled-components";
const StyledHeader = styled.header`
    padding: 1vh;
    background-color: #59502d;
    color: white;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`
const StyledHeadingH1 = styled.h1`
    font-size: calc(2px + 1.75vw);
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2.5vw);
    }
`
const StyledHeadingP = styled.p`
    font-size: calc(2px + 0.8vw);
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.7vw);
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledHeadingH1>Kevin's Resume</StyledHeadingH1>
            <StyledHeadingP>An online application showcasing Kevin's experiences and career background.</StyledHeadingP>
        </StyledHeader>
    )
}