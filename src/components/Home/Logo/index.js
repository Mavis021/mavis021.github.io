import './index.scss'
import LogoM from '../../../assets/images/whiteLogo.png'


const Logo = () => {

    return (
        <div className="logo-container">
            <img className='solid-logo' src={LogoM} alt="Logo" />
        </div>
    )
}

export default Logo;