import React,{useState} from 'react'

import Button from '../../components/Button/Button'
import './header.scss'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const listenScrollEvent = (e) => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    
    const componentDidMount = () => {
        window.addEventListener('scroll', listenScrollEvent)
    }

    return (
        <div>
            <header id='app-header' className={isScrolled ? 'app-header--scrolled' : 'app-header'}>
                    <Button className="btn-header" > Մուտք </Button> 
            </header>
            
        </div>
    )
}
export default Header;
