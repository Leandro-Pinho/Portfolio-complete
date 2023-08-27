import React from 'react'
import { skills } from '../data'
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar'

const Skills = () => {
    return (
        <>
            {skills.map(({ id, title, percentage }) => {
                return (
                    <div className="progress__box" key={id}>
                        <div className="progress__circle">
                            <CircularProgressbar
                                strokeWidth={7.5}
                                text={`${percentage}%`}
                                value={percentage}
                            />
                        </div>

                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Skills
