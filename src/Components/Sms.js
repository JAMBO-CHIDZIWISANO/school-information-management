import axios from 'axios';
import React, {Component, useState} from 'react'
//import '../styles.css'
class Sms extends Component {

    constructor(props){
        super(props);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phoneNumber: "",
            message: "",

        }
    }

    
    onChangeMessage =(e)=>{
        this.setState({message: e.target.value})
        
    }

    onChangePhoneNumber =(e)=>{
        this.setState({phoneNumber: e.target.value})
        
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const text = {
            phoneNumber: this.state.phoneNumber,
            message: this.state.message
        };

        console.log(text)

        axios.post("http://localhost:4000/send-sms", text)
        .then((res)=>{
            console.log(res.text)
        }).catch((error)=>{
            console.log(error)
        });

        this.setState({
            phoneNumber:"",
            message:""
        })
    }

render() {
    return (
    <div className='container' onSubmit={this.onSubmit}>
      

      <form className='  ' >
        <h1 className='text-center'> Send SMS</h1>
        <hr/>
        <div className='form-group mt-5'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input 
                placeholder='phone number'
                type='tel'
                name="phoneNumber"
                id="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.onChangePhoneNumber}
                className="form-control input-block-level form-control-lg mt-2"
            />
        </div>
        <div className='form-group mt-3'>
            <label htmlFor='message'>Message</label>
            <textarea 
                placeholder='message'
                type='tel'
                name="message"
                id="message"
                value={this.state.message}
                onChange={this.onChangeMessage}
                className="form-control input-block-level form-control-lg mt-2"
            />
        </div>

        <button className='btn btn-primary btn-block mt-2'>submit</button>
      </form>
    </div>
  )}
}

export default Sms
