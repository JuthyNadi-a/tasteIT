import React from 'react';

const Form = ({submit, inputHandler, firstName, lastName, phoneNumber, role, message}) => {
    return (
            <form className='content' onSubmit={submit}>
                <div className='inputs firstName'>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={inputHandler}/>
                </div>
                <div className='inputs lastName'>
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={inputHandler}/>
                </div>
                <div className='inputs'>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="tel" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={inputHandler}/>
                </div>
                <div className='inputs'>
                    <label htmlFor="role">Role</label>
                    <select name='role' id="role" onChange={inputHandler} defaultValue="choice">
                        <option value="choice" disabled>Choose a option</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='inputs'>
                    <label htmlFor="mesage">Message</label>
                    <textarea name="message" id="message" cols="20" rows="7" value={message} onChange={inputHandler}></textarea>
                </div>
                <button type="submit" id='send'>Send</button>
            </form>
    )
}

export default Form;