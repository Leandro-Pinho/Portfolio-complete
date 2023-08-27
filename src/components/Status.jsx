import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser'

const Status = () => {
    return (
        <>
            {stats.map(({ id, no, title }) => {
                return (
                    <div className="stats__box" key={id}>
                        <h3 className="stats__no">{no}</h3>
                        <p className="stats__title">{parse(title)}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Status
