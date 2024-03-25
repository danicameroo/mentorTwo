import logo from '../../images/logo.svg'
import arrow from '../../images/icon-arrow-down.svg'
import arrowOpen from '../../images/icon-arrow-up.svg'
import menuImg from '../../images/icon-menu.svg'
import menuCloseImg from '../../images/icon-close-menu.svg'
import { useState } from 'react'
import './Navbar.css'
import Feature from '../../components/feature/Feature'
import Company from '../../components/Company/Company'

const Navbar = () => {
    const [open, setOpen] = useState(true)
    const [openDos, setOpenDos] = useState(true)
    const [menu, setMenu] = useState(true)

    const onClickRes = () => {
        if(open === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

    const onClickDosRes = () => {
        if(openDos === true){
            setOpenDos(false)
        }else{
            setOpenDos(true)
        }
    }

    return(
        <div className='navbar'>
            <div className='imgNav'>
                <img src={logo} alt="" className='imgLogo' />
            </div>
            <div className='res'>
                {menu ? 
                    <img className='imgLogo' onClick = {() => (setMenu(false))} src={menuImg} alt="" /> 
                    : 
                    <div className='fondoMenuCont'>
                        <div className='fondo'></div>
                        <div className='contMenuOpen'>
                            <div className='contClose'>
                                <img className='imgClose' src={menuCloseImg} alt="" onClick = {() => (setMenu(true))} />
                            </div>
                            <div>
                                <ul className='listaNavRes'> 
                                    <div onClick = {onClickRes}>
                                        <li><div className='listaOpen'><p className='listaText'>Features</p><img className='imgArrow' alt="" src={open ? arrow : arrowOpen}/></div></li>
                                        {open ? <></> : <Feature />}
                                    </div>
                                    <div onClick = {onClickDosRes}>
                                    <li><div className='listaOpen'><p className='listaText'>Company</p><img className='imgArrow' alt="" src={openDos ? arrow : arrowOpen}/></div></li>
                                        {openDos ? <></> : <Company />}
                                    </div>
                                    <li className='listaTextLi'>Careers</li>
                                    <li className='listaTextLi'>About</li>
                                </ul>
                            </div>
                            <div className='buttonNavRes'>
                                <button className='buttonL'><p className='buttonText'>Login</p></button>
                                <button className='buttonR'><p className='buttonText'>Register</p></button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <ul className='listaNav'> 
                <div onMouseEnter = {() => (setOpen(false))} onMouseLeave = {() => (setOpen(true))}>
                    <li><div className='listaOpen'><p className='listaText'>Features</p><img className='imgArrow' alt="" src={open ? arrow : arrowOpen}/></div></li>
                    {open ? <></> : <Feature />}
                </div>
                <div onMouseEnter = {() => (setOpenDos(false))} onMouseLeave = {() => (setOpenDos(true))}>
                <li><div className='listaOpen'><p className='listaText'>Company</p><img className='imgArrow' alt="" src={openDos ? arrow : arrowOpen}/></div></li>
                    {openDos ? <></> : <Company />}
                </div>
                <li className='listaTextLi'>Careers</li>
                <li className='listaTextLi'>About</li>
            </ul>
            <div className='buttonNav'>
                <button className='buttonL'><p className='buttonText'>Login</p></button>
                <button className='buttonR'><p className='buttonText'>Register</p></button>
            </div>
        </div>
    )
}

export default Navbar