import React, { memo } from 'react'

const Ifrem = () => {
    return (
        <>
            <div className="container2">
                <iframe className='ifrem' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59854203195!2d69.11455762018232!3d41.282479929544316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9cdd04953d%3A0xf8109d550917a88e!2sChorsu%20Bazaar!5e0!3m2!1sen!2s!4v1717828518937!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default memo(Ifrem)