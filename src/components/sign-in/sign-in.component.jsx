import React from 'react';

import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch (err) {
      console.log(err);
    }

  }

  handeChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='email' name='email' value={this.state.email} handleChange={this.handeChange} label='Email' required />
          <FormInput type='password' name='password' value={this.state.password} handleChange={this.handeChange} label='Password' />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn;