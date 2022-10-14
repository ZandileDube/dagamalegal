import React from 'react';
import Employment from './images/employment.jpg'
import Injury from './images/injury.jpg'
import Intellectual from './images/Intellectual.jpg'
import Migration from './images/migration.jpg'
import Taxation from './images/taxation.jpg'
import Corporate from './images/Corporate.jpg'
import CorporateLaw from './images/Corporate law.jpg'
import Dispute from './images/dispute.jpg'
import { imageData } from './imageData';

export default function Side() {

    
  return (
    <div className='SideA'>
        {imageData.map(item => (
            <img src={item.imgSrc} alt={item.imgAlt}/>
           
        ))}
    
    

    <h1>Hello</h1>
    </div>
    
  )
}
