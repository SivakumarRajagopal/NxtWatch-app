import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  MainLoginContainer,
  LoginContainerForm,
  LoginLogoImg,
  UserNameContainer,
  LabelHeading,
  UserInputField,
  PasswordCheckContainer,
  PasswordCheckBox,
  PasswordShowLabel,
  CustomLoginButton,
  ErrorMsgUserDetails,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    isCheckedPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    console.log(history)
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onClickSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangePasswordShow = () => {
    this.setState(prevState => ({
      isCheckedPassword: !prevState.isCheckedPassword,
    }))
  }

  renderPasswordInputContainer = () => {
    const {passwordInput, isCheckedPassword} = this.state
    return (
      <UserNameContainer>
        <LabelHeading htmlFor="passwordInputField">PASSWORD</LabelHeading>
        <UserInputField
          type={isCheckedPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.onChangePasswordInput}
          value={passwordInput}
          id="passwordInputField"
        />
        <PasswordCheckContainer>
          <PasswordCheckBox
            type="checkbox"
            onClick={this.onChangePasswordShow}
            id="checkBoxForPassword"
          />
          <PasswordShowLabel htmlFor="checkBoxForPassword">
            Show Password
          </PasswordShowLabel>
        </PasswordCheckContainer>
      </UserNameContainer>
    )
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  renderUserNameInputContainer = () => {
    const {usernameInput} = this.state
    return (
      <UserNameContainer>
        <LabelHeading htmlFor="userInputField">USERNAME</LabelHeading>
        <UserInputField
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsernameInput}
          value={usernameInput}
          id="userInputField"
        />
      </UserNameContainer>
    )
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <MainLoginContainer>
        <LoginContainerForm onSubmit={this.onClickSubmitForm}>
          <LoginLogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUserNameInputContainer()}
          {this.renderPasswordInputContainer()}
          <CustomLoginButton type="submit">Login</CustomLoginButton>
          {showErrorMsg && (
            <ErrorMsgUserDetails>*{errorMsg}</ErrorMsgUserDetails>
          )}
        </LoginContainerForm>
      </MainLoginContainer>
    )
  }
}

export default LoginForm
