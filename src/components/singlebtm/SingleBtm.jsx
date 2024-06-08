import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Год" {...a11yProps(0)} />
                    <Tab label="Покрышки" {...a11yProps(1)} />
                    <Tab label="Цвет" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Цвет</p>
                    <p className='single__bottm__card__right'>Жёлтый</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Год</p>
                    <p className='single__bottm__card__right'>2016</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Диаметр колеса</p>
                    <p className='single__bottm__card__right'>27.5</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Материал рамы</p>
                    <p className='single__bottm__card__right'>Карбон</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Размер</p>
                    <p className='single__bottm__card__right'>L</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Страна</p>
                    <p className='single__bottm__card__right'>Швейцария</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Производитель</p>
                    <p className='single__bottm__card__right'>Scott</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Покрышки</p>
                    <p className='single__bottm__card__right'>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Рама</p>
                    <p className='single__bottm__card__right'>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Подседельный Штырь</p>
                    <p className='single__bottm__card__right'>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Седло</p>
                    <p className='single__bottm__card__right'>Ritchey WCS Streem V3 Titanium rails</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Вилка</p>
                    <p className='single__bottm__card__right'>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Покрышки</p>
                    <p className='single__bottm__card__right'>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Рама</p>
                    <p className='single__bottm__card__right'>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Подседельный Штырь</p>
                    <p className='single__bottm__card__right'>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Седло</p>
                    <p className='single__bottm__card__right'>Ritchey WCS Streem V3 Titanium rails</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Вилка</p>
                    <p className='single__bottm__card__right'>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p>
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Цвет</p>
                    <p className='single__bottm__card__right'>Жёлтый</p>
                </div>
                <div className="single__bottm__item">
                    <p className='single__bottm__card__left'>Год</p>
                    <p className='single__bottm__card__right'>2016</p>
                </div>
                <div className="single__bottm__card">
                    <p className='single__bottm__card__left'>Диаметр колеса</p>
                    <p className='single__bottm__card__right'>27.5</p>
                </div>
            </CustomTabPanel>
        </Box>
    );
}
