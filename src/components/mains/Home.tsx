import styled from "styled-components";

const HomeMain = styled.main`
    text-align: center;
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

const ProfilePicture = styled.img`
    max-width: 45%;
    border: #797b43 solid 0.5vw;
    border-left-color: #59502d;
    border-right-color: #59502d;
    padding: 1%;
    background-color: whitesmoke;
`
const TextWrapper = styled.div`
    color: white;
    margin-top: 2%;
    margin-left: 11%;
    margin-right: 11%;
    background-color: #797b43;
    padding: 2%;
    font-size: calc(2px + 1.2vw);
    border-radius: 15px;
    border: #59502d solid 0.3vw;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.5vw);
    }
`

export default function Home() {
    return (
        <HomeMain>
            <ProfilePicture src="../../../public/Kevin_Kupeli.jpg" alt="Kevin Kupeli" id="profile-picture"/>
            <TextWrapper id="text-wrapper">
                <p>Hi! My name is Kevin Kupeli, and I am an Undergraduate Junior Computer Science student
                    at Boston University. I am also a Course Assistant for the Introduction to Computer Science
                    1 class here at BU! Currently, I am looking to further my understanding of web development
                    principles as well as gain practical experience professionally in Software Engineering
                </p>
                <br/>
                <p>
                    This webside is a digital version of my resume showing my <strong>educational </strong>
                    and <strong>professional</strong> expereinces; as well as other information
                    about me that may interest you!
                </p>
            </TextWrapper>
        </HomeMain>
    )
}