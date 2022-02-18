import React, { useEffect } from 'react';


const searchBusiness = (event) => {
    fetch(`/Business/${Business.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
   
    }
    
}



function Home() {
    return (
        <div> 
      <input 
          value={Business}
          onChange={event => setBusiness(event.target.value)}
          onKeyPress={searchBusiness}
          placeholder='Search Businesses'
          type='text' />
            
            <p className="home">AuTKonnect konnects you to trusted service providers, specialists
        and businesses serving the autism & special needs community </p>
        <p>
        We provide resources, education and community.
        </p>
        <h2>Did you know?</h2>
        <li>1 in 44 Autism</li>
        <li>1 in 12 Communication Disorder</li>
        <li>1 in 6 Sensory Processing Disorder</li>
        </div>

        
    )
}

export default Home;