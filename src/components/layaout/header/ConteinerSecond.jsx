import Styles from '../../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faList,faShoppingCart,faHeart,faTags,faIdBadge,faQuestionCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';



export default function ConteinerSecond() {
    const [categoryMenu,setCategoryMenu] = useState(false);

    return(            
    <div className={Styles.conteiner__header__second}>
        <div className={Styles.item__1}>
            <p>#ShoppingOnline</p>
        </div>
        <NavbarMenu setCategoryMenu={setCategoryMenu}/>
        <NavBarUser/>
        {categoryMenu &&(
            <NavBarCategories setCategoryMenu={setCategoryMenu}/>
        )}
    </div>
    );
}

const NavbarMenu = ({setCategoryMenu})=>{
    const show_menu = ()=>setCategoryMenu(true);
    return (
        <nav className={Styles.nav__menu}>
            <ul>
                <li><a href="home" className={Styles.navbar__item}><FontAwesomeIcon icon={faHome} className={Styles.icon}/>Home</a></li>
                <li><span onClick={show_menu} className={Styles.navbar__item}><FontAwesomeIcon icon={faList} className={Styles.icon}/>Categories</span></li>
                <li><a href="offers" className={Styles.navbar__item}><FontAwesomeIcon icon={faTags} className={Styles.icon}/>Offers</a></li>
                <li><a href="contact" className={Styles.navbar__item}><FontAwesomeIcon icon={faIdBadge} className={Styles.icon}/>Contact</a> </li>
                <li><a href="help" className={Styles.navbar__item}><FontAwesomeIcon icon={faQuestionCircle} className={Styles.icon}/>Help</a></li>
            </ul>
        </nav>
    )
}

const NavBarUser = ()=>{
    return (
        <div className={Styles.user__item}>
            <ul className={Styles.nav__user}>
                <li><a href="shopping"><FontAwesomeIcon icon={faShoppingCart} className={Styles.icon_user}/><span className={Styles.user__shopping}>2</span></a></li>
                <li><a href="favorites">   <FontAwesomeIcon icon={faHeart} className={Styles.icon_user}/><span className={Styles.user__favorites}>2</span></a></li>
            </ul>
        </div>
    )
}

const NavBarCategories = ({setCategoryMenu})=>{

    const hidden_menu = ()=>setCategoryMenu(false);
    
    return (
        <div className={Styles.navbar__categories_background}>
            <div className={Styles.navbar__categories}>
                <div className={Styles.button__categories}>
                    <button onClick={hidden_menu}><FontAwesomeIcon icon={faTimesCircle}/></button>
                </div>
                <div className={Styles.title__navbar__categories}>
                    <h2>Categories</h2>
                </div>
                <ul>
                    <li><a href='a'>Electronics</a></li>
                    <li><a href='a'>Computers</a></li>
                    <li><a href='a'>Men's Fashion</a></li>
                    <li><a href='a'>Women's Fashion</a></li>
                </ul>
            </div>
        </div>
    )
}