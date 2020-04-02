import React from 'react'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss'
import { Link } from 'react-router-dom'

const HomePage = (props) => (

    <div className='homepage'>
        <button onClick={() => props.history.push('/hats')}>Hats (history prop)</button>
        <Link to='/hats'>Hats (Simple Link)</Link>
        <Directory />
    </div>
)

export default HomePage