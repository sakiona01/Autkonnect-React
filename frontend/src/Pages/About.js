import React from 'react'
import img from '../Images/AutKonnect_about.jpg'

export const About = () => {
  return (

    <div>
        <h1>Our Story</h1>
        <img src={img} alt="About"/>
        <h2> Catherine</h2>
    <p>Catherine Freeman (picture left) is a Speech Pathologist & an Autism Mom. Catherine has over 8 years of experience and has worked in the home health, clinic setting and the school settings.</p> 
        <h2> Camryn</h2>
    <p>Carmyn Thompson (pictured right) is a Speech Pathologist and has 4 years of experience. Carmyn has worked in the home health setting, school setting and Lamar University as an adjunct professor. We are both ASHA Certified CCC Speech Language Pathologists. Both provide speech therapy services and have developed a free resource app called AuTKonnect for parents and families with children on the autism spectrum.
    AuTKonnect is a platform dedicated to assisting parents for children with autism. AuTKonnect allows parents around the world to connect, talk and share advice with one another and to find places to meet up right from the AuTKonnect app. AuTKonnect finds FUN activities that are autism friendly such as sports, dance, gymnastics, summer camps, movie theaters, gym childcare, salons, vacations, amusement parks and so much more.</p>
</div>
  )
}

export default About;