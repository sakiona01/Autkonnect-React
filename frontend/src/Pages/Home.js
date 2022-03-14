import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'




function Home() {
    return (
        <div> 
            {/* <SearchBar placeholder="Search for Businesses..." data={business}/> */}
            <p class="home-text">AuTKonnect konnects you to trusted service providers, specialists
        and businesses serving the autism & special needs community </p>
        <p>
        We provide resources, education and community.
        </p>

        <div class="search-bar">
        <input  type="text" placeholder="Search.."/>
        </div>

        <h2 class="Home-Heading">Did you know?</h2>

        <div class="Did-You-Know">

        <ul class="no-bullets">
        <li class="Home-List">1 in 44 Autism</li>
        <li class="Home-List">1 in 12 Communication Disorder</li>
        <li class="Home-List">1 in 6 Sensory Processing Disorder</li>
        </ul>
        </div>

        </div>

        
    )
}

export default Home;