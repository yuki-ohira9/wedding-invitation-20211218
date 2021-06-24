import React from 'react';
import User from './User';
import '../css/Rsvp.css'

const Rsvp = () => {
    return (
        <div className="wrapper">
            <div className="rsvp__main">
                <div className="rsvp__description font_gray">
                    <div className="rsvp__description_block">
                        お問い合わせ、ご要望等がございましたら、お気軽にお問い合わせください。<br/>
                    </div>
                    {User.userInfo.name}
                </div>
            </div>
        </div>
    );
}

export default Rsvp;