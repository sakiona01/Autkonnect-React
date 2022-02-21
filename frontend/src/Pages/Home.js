import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';


function Home() {
    return (
        <div> 
            <SearchBar placeholder="Search for Businesses..." data={}/>
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