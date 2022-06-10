import React, { useState, useEffect, useRef } from 'react'

import closeIcon from "../../imgs/close-icon.png"

import { FaQuestionCircle } from "react-icons/fa"

import "./signup.scss"


// this is not needed if you are using javascript
// just simply add props 
type SignUpProps = { 
    show: boolean,
    setShow: (show: boolean) => void
}

const SignUp = (props: SignUpProps) => {
    // annotations only needed for typescript 
    const [dateDay, setDateDay] = useState<Array<number>>([])
    const [dateYear, setDateYear] = useState<Array<number>>([])
    const [isCustom, setIsCustom] = useState(false);

    const fnameRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        for (let i = 1; i <= 31; i++) {
            setDateDay(prevD => [...prevD, i])
        }

        for (let i = 2022; i >= 1905; i--) {
            setDateYear(prevY => [...prevY, i])
        }

        if (fnameRef.current) {
            fnameRef.current.focus();


            // You can do something with the ref here
            fnameRef.current.addEventListener("focusin", () => {

            });

            // like showing a dialog on focus out and check if input is still empty
            // you can use states to store all inputs variable
            fnameRef.current.addEventListener("focusout", () => {

                if (fnameRef.current?.value === "") {
                    // do something!
                }
            });


        }

    }, [])


    return (
        <div style={{
            display: props.show ? "flex" : "none"
        }}>
        <div className="overlay-signup"></div>
        <div className="signup">
            <div className="signup-container">
                <div className="signup-header">
                    <div>
                        <h1>Sign Up</h1>
                        <p>It's quick and easy.</p>
                    </div>
                    <img src={closeIcon} alt="close icon" id="close-icon" 
                        onClick={() => props.setShow(false)}

                    />
                </div>

                <div className="signup-seperator"></div>


                <form action="#">
                    <div className="signup-fields">
                    
                        <div className="signup-inputs">
                            <div>
                                <input type="text" placeholder='First Name' required ref={fnameRef} />
                                <input type="text" placeholder='Surename' required/>
                            </div>
                            <input className="default-input" type="text" placeholder='Mobile Number or email address' required/>
                            <input className="default-input" type="password" placeholder='Password' required/>
                        </div>


                        <div className="signup-boxes">
                            <div className="info-text">
                                <p>Date of birth</p>
                                <FaQuestionCircle />
                            </div>
    

                            <div className="signup-box">
                                <select name='day' id="day-date" required> 
                                    {
                                        dateDay.map((day, index) => (
                                            <option value={day} key={index}>{day}</option>
                                        ))    
                                    }
                                </select>                    
                                <select name='month' id="month-date">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>                    
                                <select name='year' id="year-date" required>
                                    {
                                        dateYear.map((year, index) => (
                                            <option value={year} key={index}>{year}</option>
                                        ))
                                    }

                                </select>                    
                            </div>
                            

                            <div className="info-text">
                                <p>Gender</p>
                                <FaQuestionCircle />
                            </div>
                            
                            <div className="signup-box">
                                <div className="checkbox-wrapper">        
                                    <label htmlFor="female">Female</label>
                                    <input type="radio" name="gender" value="Female" id="female" onChange={() => setIsCustom(false)}></input>
                                </div>

                                <div className="checkbox-wrapper">        
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" value="Male" id="male" onChange={() => setIsCustom(false)}></input>    
                                </div>

                                <div className="checkbox-wrapper">        
                                    <label htmlFor="custom">Custom</label>
                                    <input type="radio" name="gender" value="Custom" id="custom" onChange={() => setIsCustom(true)}></input>
                                </div>

                            </div>


                            {isCustom ? (
                                <div className="signup-custom">
                                <select name="select-pronoun">
                                    <option value="default">Select your pronoun</option>
                                    <option value="She">She</option>
                                    <option value="They">He</option>
                                    <option value="They">They</option>
                                </select>
                                <p>Your pronoun is visible to everyone.</p>
                                <input  type="text" placeholder='Gener (optional)' required/>
                            </div>
                            ) : null}
                            


                        </div>



                        <div className="signup-text">
                            <p>People who use our service may have uploaded your contact information to Facebook. <a href="#">Learn more.</a></p>
                            <p>By clicking Sign Up, you agree to our <a href="#">Terms, Data Policy</a> and <a href="#">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
                        </div>

                        <button type="submit" id="signup-btn">Sign Up</button>


                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default SignUp