import React from 'react'
import Info from '../../components/Info'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/steve-CV.pdf'
import Status from '../../components/Status'
import './about.css'
import Skills from '../../components/Skills'

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>

                        <ul className="info__list grid">
                            <Info />
                        </ul>

                        <a href={CV} download='' className='button'>Download CV
                            <span className="button__icon"><FaDownload /></span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Status />
                    </div>
                </div>

                <div className="separator"></div>

                <div className="skills">
                    <h3 className="section__subtitle subtitle__center">My Skills</h3>

                    <div className="skills__container grid">
                        <Skills />
                    </div>
                </div>

                <div className="separator"></div>
            </section>
        </main>
    )
}

export default About
