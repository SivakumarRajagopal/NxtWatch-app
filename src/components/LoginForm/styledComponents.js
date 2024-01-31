import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  background-color: '#f9f9f9';
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-top: 50px;
`

export const LoginContainerForm = styled.form`
 width: 350px;
 margin:auto;
 padding: 20px;
 line-height: 2.5;
 border-radius: 8px;
 box-shadow: 0px 0px 1px 0px #0f0f0f;
 background-color:'#f9f9f9';
 display:flex;
 flex-direction: column;
 

 @media screen  and (max-width: 767px){
     width: 100%
     padding: 10px;
 }
`

export const LoginLogoImg = styled.img`
  height: 30px;
  width: 80px;
  align-self: center;
`

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.4;
`

export const LabelHeading = styled.label`
  color: '#cccccc';
  font-size: 14px;
  font-weight: 700;
`

export const UserInputField = styled.input`
  background-color: transparent;
  border: 1px solid #475569;
  outline: none;
  border-radius: 3px;
  height: 30px;
  padding-left: 10px;
`

export const PasswordCheckContainer = styled.div`
  display: flex;
`

export const PasswordCheckBox = styled.input``

export const PasswordShowLabel = styled.label`
  font-size: 14px;
`

export const CustomLoginButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
`

export const ErrorMsgUserDetails = styled.p`
  color: #ff0b37;
  font-size: 16px;
`
