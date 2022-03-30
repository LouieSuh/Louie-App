import styled from "styled component"; `
import React from "react";
import { useHistory } from "react-router-dom";

`



const WelcomeTitle = styled.h1`
font-size "100px"
color: "blue";
`
;

    const Container = styled.div`
    height = flex;
    backgroundColor = red;
    display = "flex"
    `

     ;

    const label = styled.label`
    font-size: 20px;
    `
    ;

/**
 * 
 //TOD0
 Flex Container

 Flex Items
 */

    const labelWrapper = styled.label`
    font-size; "100px";
    Color: "blue";
    text-align; center;
    margin-top; "20px";
    width: "50%";
    backgroundColor: "beige"
    
    `
    
    ;

    
    const Right = styled.input`
    font-size; "100px";
    Color: "blue";
    text-align; center;
    margin-top; "20px";
    width: "50%";
    backgroundColor: "beige"
    
    `
    
    ;

    const Left = styled.button`
    font-size; "100px";
    Color: "blue";
    text-align; center;
    argin-top; "20px";
    width: "50%";
    backgroundColor: "beige"
    
    `
    
    ;


  function LoginPage() {


      const {user , setUser} = newStates({

      id: "",
      password: "",

      });


      const navigateToMainPage = (id, password) => {
        history.push("/Main");
        if (id == "" && password == "");
        alert("ID or Password is Empty");
        return;

        {

        if(id = "Louie" && password == "Louie");
        history.push("/Main")
        
        
        }
        

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

   return (
        <Container>
            <LeftSide>
                <welcomeTitle>Welcome</welcomeTitle>
                <labelWrapper>
                    <Label>ID</Label>
                    {/* // We are going to replace empty string to the following input by the user
                    user * */ }
                    <Input
                    type="text" value={id} name = "id" onChange={putUserInfo}></Input>
                </labelWrapper>
                <labelWrapper>
                    <Label>Password</Label>
                    <Input 
                    type = "password" value={password} name = "password" onChange={putUserInfo}></Input>
                </labelWrapper>
                <LoginPage onClick={navigateToMainPage}></LoginPage>
            </LeftSide>
            <RightSide></RightSide> 
        </Container>
    )

        }
    
export default LoginPage;
