import styled from "styled-components"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {goodStrap} from "Main"
import "bootstrap/dist/css/bootstrap.min.css";
import "/css"
import { ProgressBar } from "react-bootstrap";




const Container = styled.div
    height = flex;
    backgroundColor = red;
    display = "flex"

    ;

    const Left = styled.div
    height = flex;
    backgroundColor = white;
    display = "flex"

    ;

    const Right = styled.div
    height = flex;
    backgroundColor = blue;
    display = "fixed"

    ;

    styled.button = styled.div
    borderRadius = 100;
    fontsize = 50;

    
    

    const ImageBox = styled.div`
    ImageBox = image;
    


    `

    const deatiledCOntainer = styled.div`
    display = "flex"
    flex-direction: column;


    `

    const DeatilCount = styled.div`
    color: "orange";
    height: 100;
    width: 100;

    
    
    `
    
    const aboutMe = styled.div`

    height: 50%;
    width: 100%;
    size: flex;
    padding-bottom: 80px;

    `

    const Education = styled.div `
    width: 10px;
    height: 10px;
    size: flex;
    color: blue;

    `

    const EducationContainer = styled.div`

    width: 100px;
    padding-top: 50px;


    `

    const EducationRowContainer = styled.div`


    display: flex;
    margix-container: 50px;

    `

    function Main() {
        return(
            <Wrapper>
                <Left>
                    <h1>Hi, my name is Louie!</h1>
                </Left>
                <aboutMe>
                <detailedContainer>
                <ImageCount>
                <CountBox>
                <EducationContainer>
                <EducationRowContainer>
                <Label></Label>
                <Title>Education</Title>
                </EducationRowContainer><p>GPA</p>
                " width: 100px , height 50px; 
                backgroundColor: blue; " </EducationContainer>
                </CountBox>
                </ImageCount>
                </detailedContainer>
                </aboutMe>
                <Right>
                    <p> I am a student who is attending BCC since grade 6. 
                        I am also good at playing sports 
                        and likes to play games.  </p>
                    <a href="https://github.com/2023LouieSuh">
                    </a>
                </Right>
            </Wrapper>
        )
    }



    function Main2() {
        return(
            <Wrapper>
                <Left>
                    <h1>About Me</h1>
                </Left>
                <Right>
                    <p> I am a student who is grade 11 in BCC. 
                        I enjoy playing sports such as Ice Hockey, 
                        and I like to watch a lot of stuff related to it. </p>
                    <a href="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/OBZzM6pm_P69pqL8jbcWfBoFu0I=/1440x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/QTAVFA64PVHDPM7IRPH3FTUBIU.jpg" >
                    </a>
                    <p2>
                        I want to major in both biology and computer Science in the future,
                        and I want to be succesful. 
                    </p2>
                </Right>
            </Wrapper>
        )


        function Main3() {
            return(
                <Wrapper>
                    <Left>
                        <h1>About Me</h1>
                    </Left>
                    <Right>
                        <p> What I like  </p>
                    </Right>
                </Wrapper>
            )
    }



    



    export default Main;

    


    }

    
