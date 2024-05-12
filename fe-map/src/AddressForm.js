import React, { useState } from 'react';
import axios from 'axios'

import MapComponent from './Map';

export default function AddressForm(){
    const [address, setAddress] = useState('')
    const [position, setPosition] = useState(null)
    const[isEmpty, setIsEmpty] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(address.trim().length == 0){
            setIsEmpty('Address is required')
        }else{
            try {
                const response = await axios.get(`http://localhost:4044/locate?address=${address}`);
                // console.log(response.data, 'response data')
          
                if (!response.data) {
                  console.log('Invalid response', response)
                }else{
                    const { lat, lng } = response.data.location;
                    setPosition([ lat, lng ]);
                    setIsEmpty('')
                }
                
              } catch (error) {
                console.log(error);
              } 
        }     
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2> Enter address</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
        {isEmpty && <span style={{color:"red"}}>{isEmpty}</span>}

      </form>
       {position && <MapComponent position={position}/>}</>
    )
}