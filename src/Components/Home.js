import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='homepage'>
            <h1 className='greeting'>Welcome to GhibliApp!</h1>
            <div>
                <section>
                    <img className="homepage" src="https://64.media.tumblr.com/681c73355860c248a6946b54c5bb687c/tumblr_pmj7auCu611vvdbw1_500.gifv" alt=""/>
                </section>
            </div>
        </div>
    )
}

export default Home