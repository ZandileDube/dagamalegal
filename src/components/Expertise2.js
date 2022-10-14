import React, { useState } from 'react'
import './Expertise.css'
import Employment from './images/employment.jpg'
import Injury from './images/injury.jpg'
import Intellectual from './images/Intellectual.jpg'
import Migration from './images/migration.jpg'
import Taxation from './images/taxation.jpg'
import Corporate from './images/Corporate.jpg'
import CorporateLaw from './images/Corporate law.jpg'
import Dispute from './images/dispute.jpg'

const Expertise = () => {
    const [showText, setShowText] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    // function onClick(e) {
    //    handleRemove(index);

    // }
    function handleMouseEnter(e) {
        // setIsHovering(index);
        // setShowText(index)

    }
    function handleMouseLeave(e) {
        setIsHovering(-1);
        setShowText(-1);
    }
   
   return (
        <div className='services' id='Services'>
            <div className='container'>
                <h1>PRACTICE AREAS</h1>

                <p>TAKE THE RIGHT SOLUTION FOR YOUR BUSINESS</p>

                <div className='content'>

                    <div className="Tax">

                        <img src={Taxation} alt='Taxation' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Taximg" />
                       {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}
                    </div>

                    <div className='Finance'>
                        <img src={Corporate} alt='Corporate' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Financeimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}
                    </div>

                    <div className='Corporate Law'>
                        <img src={CorporateLaw} alt='Corporate Law' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="CorporateLimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}
                    </div>
                    <div className='Emigration'>
                        <img src={Migration} alt='Migration'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Migrationimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}
                    </div>


                    <div className='Employment Law '>
                        <img src={Employment} alt='EmploymentLaw' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Employmentimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}

                    </div>

                    <div className='Intellectual Property'>
                        <img src={Intellectual} alt='IntellectualLaw' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Intellectuelimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}

                    </div>
                    <div className='Injury'>
                        <img src={Injury} alt='Goverance' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Injuryimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}
                    </div>
                    <div className='Dispute Resolution '>
                        <img src={Dispute} alt='Dispute'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Disputeimg"/>
                        {showText && <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expertise