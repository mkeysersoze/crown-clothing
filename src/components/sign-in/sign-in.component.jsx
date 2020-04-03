import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            currentUser: null
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })

    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange} />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange} />

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
