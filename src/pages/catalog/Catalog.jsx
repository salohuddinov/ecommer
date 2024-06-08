import React, { memo } from 'react'
import Catalog from '../../components/catalog/Catalog'
import Corusel from '../../components/corusel/Corusel'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

function Catalogs() {
    return (
        <>
            <div className="container">
                <div className="naviget">
                    <div className="naviget__left">
                        <div className="naviget__left__info">
                            <div className="naviget__item">
                                <Link to={"/"} className='naviget__item__p'>Главная</Link>
                                <NavigateNextIcon className='naviget__item__activ' />
                                <p className='naviget__item__activ'>Каталог</p>
                            </div>
                            <p className='naviget__p'>Каталог</p>
                        </div>
                    </div>
                </div>
            </div>
            <Catalog />
            <Corusel />
        </>
    )
}

export default memo(Catalogs)