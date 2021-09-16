import React from 'react';
import sarahpic from '../../assets/images/ProfilePhoto.jpg';
function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img
                    src={sarahpic}
                    alt="sarah profile picture"

                    id="profile-pic"
                />
            </div>
            <br></br>
            <div>

                <p>
                    I am a full stack web developer looking to build a more
                    intuitive user experience on the web. I recently earned
                    a certificate in full stack development from the
                    University of Toronto bootcamp. I was able to develop
                    skills in JavaScript, CSS, React.js, and responsive web
                    design.
				</p>
                <p>
                    I applied aspects of the training and skills I learned in
                    the coding bootcamp to my github account
                    <a
                        href="https://github.com/sylviamarja"
                        target="_blank"
                    >

                    </a>
                     Linkedin Profile
                    <a
                        href="https://www.linkedin.com/in/sarah-azzopardi-276994204/"
                        target="_blank"
                    >

                    </a>
                </p>
            </div>
        </section>
    );
}

export default About;