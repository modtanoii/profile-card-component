import React from 'react'
import Card from './Card'
import BGCard from '../assets/bg-pattern-card.svg'
import ProfileImg from '../assets/image-victor.jpg'
import './Profile.css'

function Profile() {
  return (
    <Card>
        <div className="main">
            <img src={BGCard} alt="" />
            <div className="content">
                <img src={ProfileImg} alt="" />
                <h2>Victor Crest <span>26</span></h2>
                <p>London</p>
                <div className="footer">
                    <div>
                        <p className='num'>80K</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p className='num'>804K</p>
                        <p>Likes</p>
                    </div>
                    <div>
                        <p className='num'>1.4K</p>
                        <p>Photos</p>
                    </div>
                </div>
            </div>            
        </div>
    </Card>
  )
}

export default Profile