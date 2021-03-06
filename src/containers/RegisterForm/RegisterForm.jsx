import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../Common/Form';
import * as userService from '../../services/userService';

class RegisterForm extends Form {
    state = {
        data: { email: '', password: '', name: ''},
        errors: {}
      }

      schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label('Email'),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required().label('Name')
    }

     
    doSubmit = async () => {
        try{
            await userService.register(this.state.data);
            this.props.history.push('/login');
        } catch (ex) {
            if (ex.response && ex.response.status === 400){
                const errors = { ...this.state.errors};
                errors.email = ex.response.data['email'][0];
                this.setState({errors});
            }
        }
        
    }

    render() { 
        const styles = this.sendStyle()
        return ( 
            <div className={styles.formclass}>
            <h2 className="alert alert-success">Register</h2>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('name', 'Name')}
                {this.renderInput('email', 'Email')}
                {this.renderInput('password', 'Password', "password")}
                {this.renderButton('Register')}
            </form>
        </div>
         );
    }
}
 
export default RegisterForm;