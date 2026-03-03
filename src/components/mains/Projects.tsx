import {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router";

const ProjectMain = styled.main`
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

const ProjectImageContainer = styled.div`
    text-align: center;
`

const ProjectImage = styled.img`
    padding: 1%;
    max-width: 60%;
    background-color: whitesmoke;
    border-radius: 15px;
    border: #59502d solid 0.5vw;
    border-top-color: #797b43;
    border-bottom-color: #797b43;
`

const ProjectMainHeading = styled.h2`
    text-align: center;
    color: white;
    font-size: calc(2px + 1.5vw);
    padding-bottom: 2%;
    @media screen and (max-width: 1000px) {
            font-size: calc(2px + 2.3vw);
    }
`

const ProjectDescription = styled.div`
    width: 90%;
    border-left: #59502d solid 0.4vh;
    background-color: #797b43;
    padding: 1%;
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.5vw);
    }
`

const DevPostLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: calc(2px + 0.8vw);
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.5vw);
    }
`
const CalculatorDiv = styled.div`
    margin: auto;
    background-color: #E1BB80;
    color: black;
    text-align: center;
    padding: 1%;
    border: #60482b solid 0.3vw;
    border-radius: 10px;
    width: 50%;
    font-size: calc(2px + 1vw);
`

const CalculatorH5 = styled.h5`
    font-size: calc(2px + 1.2vw);
`

const CalculatorInput = styled.input`
    width: 100%;
`

const CalcOutput = styled.h3<{output: string}>`
    color: ${({output}) => (Number(output) >= 0) ? "black" : "red"};
`

const ButtonList = styled.ul`
    padding: 2%;
    display: flex;
    flex-direction: row;
    list-style: none;
`

const CalcButtonLi = styled.li`
    margin: auto;
`

const CalcButton = styled.button`
    background-color: #797b43;
    color: white;
    border-radius: 20px;
    font-size: calc(2px + 0.8vw);
`

export default function Projects(){
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [output, setOutput] = useState(0);

    function doAdd() {
        setOutput(Number(input1)+Number(input2));
    }
    function doSub() {
        setOutput(Number(input1)-Number(input2));
    }
    function doMul() {
        setOutput(Number(input1)*Number(input2));
    }
    function doDiv() {
        setOutput(Number(input1)/Number(input2));
    }
    function doPow() {
        let res = Number(input1);
        for (let i = 0; i < Number(input2); i++) {
            res = (Number(res) * Number(input1))
        }
        setOutput(res);
    }
    function clearCalc() {
        setInput1('');
        setInput2('');
        setOutput(0);
    }

    return (
        <ProjectMain>
            <ProjectMainHeading>Projects</ProjectMainHeading>
            <ProjectImageContainer>
                <ProjectImage src="../../../public/fashionforward-screenshot.jpeg" id="fashionforward-screenshot"
                              alt="FashionForward Project Screenshot Example"/>
            </ProjectImageContainer>
            <ProjectDescription className="project">
                <h5>FashionForward | <em>Software Developer</em></h5>
                <br/>
                <h5>FashionForward is a web application built to utilize the Gemini API
                    to create an AI-powered personal stylist. This project won my team and I
                    the <strong>Best Use of Gemini API Award</strong> at BostonHacks 2025, BU's largest hackathon!
                </h5>
                <br/>
                <DevPostLink to="https://devpost.com/software/fashion-forward-su1r7y?_gl=1*1wr4sec*_gcl_au*MTM0MDAxODUxNC4xNzcwNDI2OTA4*_ga*MTgyNjk5NzU3OC4xNzcwNDI2OTA5*_ga_0YHJK3Y10M*czE3NzA0MzUxMTkkbzIkZzEkdDE3NzA0MzUxMzIkajQ3JGwwJGgw"
                   target="_blank">
                    Click here to check out the Project DevPost!
                </DevPostLink>
            </ProjectDescription>
            <br/>
            <CalculatorDiv id="calculator">
                <CalculatorH5>Kev's Calculator!</CalculatorH5>
                <br/>
                <label htmlFor="first-val">First Value: </label>
                <CalculatorInput type="text" id="first-val" value={input1} onChange={(e) => setInput1(e.target.value)}/>
                <br/>
                <label htmlFor="second-val">Second Value: </label>
                <CalculatorInput type="text" id="second-val" value={input2} onChange={(e) => setInput2(e.target.value)}/>
                <br/>
                <ButtonList id="buttons">
                    <CalcButtonLi>
                        <CalcButton onClick={doAdd}>+</CalcButton>
                    </CalcButtonLi>
                    <CalcButtonLi>
                        <CalcButton onClick={doSub}>-</CalcButton>
                    </CalcButtonLi>
                    <CalcButtonLi>
                        <CalcButton onClick={doMul}>*</CalcButton>
                    </CalcButtonLi>
                    <CalcButtonLi>
                        <CalcButton onClick={doDiv}>/</CalcButton>
                    </CalcButtonLi>
                    <CalcButtonLi>
                        <CalcButton onClick={doPow}>**</CalcButton>
                    </CalcButtonLi>
                    <CalcButtonLi>
                        <CalcButton onClick={clearCalc}>Clear</CalcButton>
                    </CalcButtonLi>
                </ButtonList>
                <CalcOutput id="output" output={output.toString()}>{output}</CalcOutput>
            </CalculatorDiv>

        </ProjectMain>
    );
}