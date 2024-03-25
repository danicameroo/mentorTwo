import img from '../../images/image-hero-desktop.png'
import imgRes from '../../images/image-hero-mobile.png'
import audio from '../../images/client-audiophile.svg'
import data from '../../images/client-databiz.svg'
import maker from '../../images/client-maker.svg'
import meet from '../../images/client-meet.svg'
import './Home.css'

const Home = () => {
    return(
        <div className="home">
            <div className='containerUno'>
                <div>
                    <h1 className='titleHome'>Make remote work</h1>
                    <p className='textHome'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className='buttonHome'><p className='buttonHomeText'>Learn more</p></button>
                </div>
                <div className='client'>
                    <img className='clientImg' src={data} alt="" />
                    <img className='clientImg' src={audio} alt="" />
                    <img className='clientImg' src={meet} alt="" />
                    <img className='clientImg' src={maker} alt="" />
                </div>
            </div>
            <div className='containerUno'>
                <img className='imgHome' src={img} alt="" />
                <img className='imgHomeres' src={imgRes} alt="" />
            </div>
        </div>
    )
}

export default Home