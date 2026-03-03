
import styled from "styled-components";

const CertsMain = styled.main`
    height: 120vh;
    width: 70%;
    padding: 1.3%;
    border: #60482b solid 0.3vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
const CertsMainHeader = styled.h2`
    text-align: center;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding-bottom: 2%;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2.3vw);
    }
`
const CertsLogoContainer = styled.div`
    text-align: center;
`

const CertsLogo = styled.img`
    max-width: 40%;
    padding: 0.5%;
    background-color: whitesmoke;
    border-radius: 15px;
    border: #59502d solid 0.5vw;
    border-top-color: #797b43;
    border-bottom-color: #797b43;
`
const CertsText = styled.div`
    font-size: calc(2px + 0.8vw);
    margin: 5%;
    color: white;
    border-left: #59502d solid 0.3vw;
    padding: 2%;
    background-color: #797b43;
    border-radius: 10px;
`

export default function Certifications() {
    return (
        <CertsMain id="certs-main">
            <CertsMainHeader>Certifications I've Completed</CertsMainHeader>
            <CertsLogoContainer className="certificate-logo">
                <CertsLogo src="/google-logo.png" alt="Google Logo"/>
            </CertsLogoContainer>
            <CertsText className="certificate-wrapper">
                <h5><strong>Google IT Support Professional Certificate</strong></h5>
                <br/>
                <ul>
                    <li>
                        Completed an online Google Career course focused on IT support
                        skills. Learned troubleshooting, system administration and how to
                        use AI in IT.
                    </li>
                    <li>Earned: August 2025</li>
                </ul>
            </CertsText>
            <CertsLogoContainer className="certificate-logo">
                <CertsLogo src="/scrum-logo.png" alt="Scrum Logo"/>
            </CertsLogoContainer>
            <CertsText className="certificate-wrapper">
                <h5><strong>Professional Scrum Developer Certification (PSD)</strong></h5>
                <br/>
                <ul>
                    <li>
                        Completed an online course focused on working in Scrum teams
                        and applying modern Agile and DevOps practices. Learned about
                        Scrum values and how they apply to Software Engineering and product
                        design.
                    </li>
                    <li>Earned: July 2025</li>
                </ul>
            </CertsText>
        </CertsMain>
    )
}