import styled from "styled component";
import React from "react";
import { useHistory } from "react-router-dom";

const WelcomeTitle = style.h1
fontsize = "100px"
color = "blue"
textAlign = "center"
marginTop = "20px"
backgroundColor = beige

;



    const Container = styled.div
    height = flex;
    backgroundColor = red;
    display = "flex"

    ;

/**
 * 
 //TOD0
 Flex Container

 Flex Items
 */

    const Righttside = styled.h1;
    font-size; "100px";
    Color: "blue";
    text-align; center;
    margin-top; "20px";
    width: "50%";
    backgroundColor: "beige";


    const Leftside = styled.h1;
        font-size; "100px";
        Color: "blue";
        text-align; center;
        margin-top; "20px";
        width: "50%";
        backgroundColor: "beige";



  function Loginpage() {


      const {user , setUser} = newStates({

      id: "",
      password: "",

      });


      const navigateToMainPage = (id, password) => {
        history.push("/main");
        


    };
    
    // e stands for events
    const putUserInfo = (e) => {};
    const { name, value } = e.target.result;
    console.log(name);
    console.log(value);
    setUser ({
        ...user,
        [name]: value,
    });
    console.log(user);
};
    return(
        <Container>
            <Leftside>
                <wlecomeTitle>Welcome</wlecomeTitle>
                <labelWrapper>
                    <Label>ID</Label>
                    {/* // We are goin gto replace empty string to the following input by the user
                    user * */ }
                    <Input
                    type="text" value={id} name = "id" onChange={putUserInfo}></Input>
                </labelWrapper>
                <labelWrapper>
                    <Label>Password</Label>
                    <Input 
                    type = "password" value={password} name = "password" onChange={putUserInfo}></Input>
                </labelWrapper>
                <Loginpage onClick={navigateToMainPage}></Loginpage>
            </Leftside>
            <RightSide></RightSide> 
        </Container>
    )
    
    export default Loginpage;

    

    
