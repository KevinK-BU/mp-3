
import styled from "styled-components";

const AwardsMain = styled.main`
    height: 150vh;
    width: 70%;
    padding: 1.3%;
    border: #60482b solid 0.3vw;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
const AwardsMainH2 = styled.h2`
    text-align: center;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding-bottom: 2%;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 2.3vw);
    }
`

const AwardsImageContainer = styled.div`
    text-align: center;
    padding: 1%;
`

const AwardsImage = styled.img`
    padding: 1%;
    background-color: white;
    max-width: 40%;
    border-radius: 15px;
    border: #59502d solid 0.5vw;
    border-top-color: #797b43;
    border-bottom-color: #797b43;
`

const AwardsText = styled.div`
    border-left: #59502d solid 0.3vw;
    padding: 1%;
    background-color: #797b43;
    border-radius: 10px;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.5vw);
        border-left: #59502d solid 0.7vw;
    }
`

export default function Awards() {
    return (
        <AwardsMain id="awards-main">
            <AwardsMainH2>Awards I've Earned</AwardsMainH2>
            <AwardsImageContainer className="award-image">
                <AwardsImage src="../../../public/Boston-Hacks-Logo.jpg" alt="BostonHacks 2025 Logo"/>
            </AwardsImageContainer>
            <AwardsText className="award-container">
                <h5>BostonHacks 2025 Best Use of Gemini API</h5>
                <ul>
                    <li>Awarded for my project FashionForward, my team and I competed in the BostonHacks 2025
                        24-Hour Hackathon and won this award. Among 227 registered participants, my team of 3
                        fellow developers and I worked together to utilize the Gemini API and win this award!
                    </li>
                    <li>Awarded: October 2025</li>
                </ul>
            </AwardsText>
            <AwardsImageContainer className="award-image">
                <AwardsImage src="../../../public/Boston_University_Square_Logo.png" alt="Boston University Logo"/>
            </AwardsImageContainer>
            <AwardsText className="award-container">
                <h5>Boston University CAS Dean's List</h5>
                <ul>
                    <li>Awarded to full-time students who earn a GPA of 3.5 or higher at Boston University's College
                        of Arts and Science
                    </li>
                    <li>Awarded For: Fall 2023, Spring 2024, Fall 2024, Spring 2025, Fall 2025</li>
                </ul>
            </AwardsText>
            <AwardsImageContainer className="award-image">
                <AwardsImage src="../../../public/questbridge_logo.jpg" alt="QuestBridge Logo"/>
            </AwardsImageContainer>
            <AwardsText className="award-container">
                <h5>QuestBridge National College Match Scholarship Award</h5>
                <ul>
                    <li>This scholarship is awarded to low-income high school seniors.
                        Among over 180,000 applicants, I was one of the 1,755 students selected
                        to attend a university on a full-ride scholarship. Of those 1,755 students,
                        I was one of 30 matched to Boston University!
                    </li>
                    <li>Awarded: December 2022</li>
                </ul>
            </AwardsText>

        </AwardsMain>
    )
}