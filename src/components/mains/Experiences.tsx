
import styled from "styled-components";

const ExperienceMain = styled.main`
    height: 100vh;
    width: 70%;
    padding: 1.3%;
    border: #60482b solid 0.3vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
const ExperienceWrapper = styled.div`
    font-size: calc(2px + 0.8vw);
    margin: 10%;
    color: white;
    border-left: #59502d solid 0.3vw;
    padding: 2%;
    background-color: #797b43;
    border-radius: 10px;
`
const ExperienceTitle = styled.h2`
    text-align: center;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding-bottom: 2%;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2.3vw);
    }
`

export default function Experiences() {
    return (
        <>
            <title>Experiences | Kevin's Resume</title>
            <ExperienceMain>
                <ExperienceTitle>Experience Background</ExperienceTitle>
                <ExperienceWrapper>
                    <h5><strong>Boston University</strong> | <em>Undergraduate Course Assistant</em></h5>
                    <br/>
                    <ul>
                        <li>
                            Facilitates labs and supports 900+ students in mastering core CS concepts
                            including Python programming, debugging, and recursive algorithm design.
                        </li>
                        <li>September 2024 - Present</li>
                        <li>Boston, MA</li>
                    </ul>
                </ExperienceWrapper>
                <ExperienceWrapper >
                    <h5><strong>Boston University Spark! Technology Fellowship</strong> | <em>Technical Innovator
                        Fellow</em></h5>
                    <br/>
                    <ul>
                        <li>
                            Leads a cross-functional software engineering team using Agile/Scrum methodologies,
                            facilitating design and development sprint planning, execution, and retrospectives.
                        </li>
                        <li>January 2026 - Present</li>
                        <li>Boston, MA</li>
                    </ul>
                </ExperienceWrapper>
                <ExperienceWrapper >
                    <h5><strong>Old Navy</strong> | <em>Retail Sales Associate</em></h5>
                    <br/>
                    <ul>
                        <li>
                            Worked to maintain a neat sales floor, operate point of sale systems and
                            enhance my customer service skills.
                        </li>
                        <li>July 2024 - September 2024</li>
                        <li>Holyoke, MA</li>
                    </ul>
                </ExperienceWrapper>
            </ExperienceMain>
        </>
    )
}