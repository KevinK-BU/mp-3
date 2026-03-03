
import styled from "styled-components";

const ImageWrapper = styled.div`
    text-align: center;
    padding: 1%;
`

const StyledImage = styled.img`
    max-width: 70%;
    padding: 0.5%;
    background-color: whitesmoke;
    border-radius: 15px;
    border: #59502d solid 0.5vw;
    border-top-color: #797b43;
    border-bottom-color: #797b43;
`

const EducationMain = styled.main`
    height: 140vh;
    width: 70%;
    padding: 1.3%;
    border: #60482b solid 0.3vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const EducationTitle = styled.h2`
    text-align: center;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding-bottom: 2%;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2.3vw);
    }
`

const EducationWrapper = styled.div`
    color: white;
    border-left: #59502d solid 0.3vw;
    padding: 2%;
    background-color: #797b43;
    border-radius: 10px;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.5vw);
        border-left: #59502d solid 0.7vw;
    }
`

export default function Education() {
    return (
        <EducationMain>
            <EducationTitle>Educational Background</EducationTitle>
            <ImageWrapper className="image-wrapper">
                <StyledImage src="../../../public/Boston-University-Terriers-logo.png" alt="Boston University Terriers Logo" id="bu-logo"/>
            </ImageWrapper>
            <EducationWrapper className="education-wrapper">
                <h5><strong>B.A. in Computer Science</strong> | <em>Boston University, Boston MA.</em></h5>
                <br/>
                <h5>Relevant Courses: Introduction to Computer Science, Data Structures, Databases,
                    Analysis of Algorithms, Web Development (most relevant), Software Engineering</h5>
                <br/>
                <h5>Attending: September 2023 - Expected May 2027</h5>
            </EducationWrapper>
            <br/>
            <ImageWrapper className="image-wrapper">
                <StyledImage src="../../../public/High_School_Logo.png" alt="The Springfield Renaissance School Logo" id="hs-logo"/>
            </ImageWrapper>
            <EducationWrapper className="education-wrapper">
                <h5><strong>High School Diploma</strong> | <em>The Springfield Renaissance School of Expeditionary Learning</em>
                </h5>
                <br/>
                <h5>Attended: August 2019 - June 2023</h5>
            </EducationWrapper>
        </EducationMain>

)
}