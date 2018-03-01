import React, { Component } from 'react';

export default class LoginContainer extends Component{
    render(){
        return (
            <div class="content">
            <div id="login-v2" class="row no-gutters">
                <div class="intro col-12 col-md">
        
                    <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-left py-16 py-md-32 px-12">
        
                        <div class="logo bg-secondary mb-8">
                            <span>F</span>
                        </div>
        
                        <div class="title">
                            Bienvenido a WebAPP!
                        </div>
        
                        <div class="description pt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque.
                            Sed mollis velit facilisis facilisis viverra.
                        </div>
        
                    </div>
                </div>
        
                <div class="form-wrapper col-12 col-md-auto d-flex justify-content-center p-4 p-md-0">
        
                    <div class="form-content md-elevation-8 h-100 bg-white text-auto py-16 py-md-32 px-12">
        
                        <div class="title h5">Log in to your account</div>
        
                        <div class="description mt-2">Sed mollis velit facilisis facilisis viverra</div>
        
                        <form name="loginForm" novalidate class="mt-8">
        
                            <div class="form-group mb-4">
                                <input type="email" class="form-control" id="loginFormInputEmail" aria-describedby="emailHelp" placeholder=" " />
                                <label for="loginFormInputEmail">Email address</label>
                            </div>
        
                            <div class="form-group mb-4">
                                <input type="password" class="form-control" id="loginFormInputPassword" placeholder="Password" />
                                <label for="loginFormInputPassword">Password</label>
                            </div>
        
                            <div class="remember-forgot-password row no-gutters align-items-center justify-content-between pt-4">
        
                                <div class="form-check remember-me mb-4">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" aria-label="Remember Me" />
                                        <span class="checkbox-icon"></span>
                                        <span class="form-check-description">Remember Me</span>
                                    </label>
                                </div>
        
                                <a href="#" class="forgot-password text-secondary mb-4">Forgot Password?</a>
        
                            </div>
        
                            <button type="submit" class="submit-button btn btn-block btn-secondary my-4 mx-auto" aria-label="LOG IN">
                                LOG IN
                            </button>
        
                        </form>
        
                        <div class="separator">
                            <span class="text">OR</span>
                        </div>
        
                        <button type="submit" class="google btn btn-block btn-secondary my-2 mx-auto" aria-label="LOG IN">
                            <span>
                                <i class="icon-google-plus s-4"></i>
                                <span>Log in with Google</span>
                            </span>
                        </button>
        
                        <button type="submit" class="facebook btn btn-block btn-secondary my-2 mx-auto" aria-label="LOG IN">
                            <span>
                                <i class="icon-facebook s-4"></i>
                                <span>Log in with Facebook</span>
                            </span>
                        </button>
        
                        <div class="register d-flex flex-column flex-sm-row align-items-center justify-content-center mt-8 mb-6 mx-auto">
                            <span class="text mr-sm-2">Don't have an account?</span>
                            <a class="link text-secondary" href="pages-auth-register-v2.html">Create an account</a>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}