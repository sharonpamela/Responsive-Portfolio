import React from 'react';
import './style.css';
import profilePic from './../shared/images/sharon-profile-pic-1.jpeg'

class About extends React.Component {
    render() {
        return (
            <div className="aboutContainer copyright">

                <div className="picture">
                    <img src={profilePic} alt="Profile" />
                </div>

                <div className="about">
                    <h1>About</h1>
                    <p>Full Stack Web Developer with Computer Science degree and experience in the areas of
                        cloud storage and computer networking. Also a recent graduate of the Full Stack Web
                        Development Bootcamp at UC Berkeley. Self-driven and highly motivated to join a team
                        in the capacity of Full Stack Web Engineer. Skills include Javascript, Python, Java,
                        Node.js, databases, Linux, and server virtualization technologies. Eager to create
                        impactful applications and provide solutions to problems from a user-focused experience.
                    </p>
                    <br />
                </div>
                

                <div className="skills">
                    <h1>Technical Skills</h1>
                    <p>
                        <b>Programming languages:</b> Javascript, Python, Java, Bash scripting <br />
                        <b>Languages:</b> Native Spanish speaker, Professional working proficiency Portuguese <br />
                        <b>Operating Systems:</b> Mac OS, MS Windows, Linux CentOS, Ubuntu <br />
                        <b>Other Skills:</b> HTML5/CSS, Node.js, React.js, MySQL, APIs, Authentication Strategy with Passport.js,
                        MongoDB, jQuery, AJAX, Git, Web Design, Command Line Interfaces, Bootstrap, VMware vSphere, Agile,
                        Camtasia, Computer Networking, Cloud Storage Technologies, Server Virtualization, Nutanix Hypervisor,
                        VMware vSphere.
                    </p>
                    <br />
                    <h1>Download Resume PDF</h1>
                </div>

            </div>
        );
    }
}
export default About;




