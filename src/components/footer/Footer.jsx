import React, { memo } from 'react'

function Footer() {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="footer__card">
                        <h2>Biz haqimizda</h2>
                        <p>Topshirish punktlari</p>
                        <p>Vakansyalar</p>
                    </div>
                    <div className="footer__card">
                        <h2>Foydalanuvchilarga</h2>
                        <p>Biz bilan bog'lanish</p>
                        <p>Savol javob</p>
                    </div>
                    <div className="footer__card">
                        <h2>Tadbirkorlarga</h2>
                        <p>Uzumda soting</p>
                        <p>Sotuvchi kabinetiga kirish</p>
                    </div>
                    <div className="footer__card">
                        <h2>Ilova yuklab olish</h2>
                        <h2>Uzum ichtimoi tarmoqlarda</h2>
                    </div>
                </div>
                <h2 className='sior'>Maxfiylik kelishuvi Foydalanuvchi Kelishuvi</h2>
            </div>
        </>
    )
}

export default Footer