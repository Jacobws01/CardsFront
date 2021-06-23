import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext'
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';

import styles from '../styles/Header.module.css'

function Header() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
    const router = useRouter()

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
    	if (window.innerWidth < 960) {
      	setDropdown(false);
    	} else {
      	setDropdown(true);
    	}
  	};

  	const onMouseLeave = () => {
    	if (window.innerWidth < 960) {
      	setDropdown(false);
    	} else {
      	setDropdown(false);
    	}
  	};

    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }

    const { user } = useContext(AuthContext)

    return (
      <div className={styles.navbar}>
          <div className={styles.navbarcontainer}>
                <Link href="/"><div className={styles.navbarlogo}>
                    <AiOutlineCreditCard className={styles.navbaricon}/>
                      <h1 className={styles.navbarh1}>Cards</h1>
                  </div></Link>
                  <div className={styles.menuicon} onClick={handleClick} >
          {click ? <FaTimes /> : <FaBars />}
          </div>
           {click ? ( <Dropdown /> ): ('')}
                <ul className={styles.navmenu}>
                  <li className={styles.navitem}>
          <Link href="/" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>Home</a>
          </Link>
          </li>
          <li className={styles.navitem}>
          <Link href="/plans" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>Plans</a>
          </Link>
          </li>
          <li className={styles.navitem}>
          <Link href="/products" onClick={closeMobileMenu}>
            <a className={styles.navlinks}>Products</a>
          </Link>
          </li>
        </ul>
				<div className={styles.auth}>
					{user ? (
						<Link href="/account">
							<a className={styles.navlinks}>{user.email}</a>
						</Link>
					) : (
						<Link href="/login">
							<a className={styles.navlinks}>Login</a>
						</Link>
					)}
        </div>
            </div>
            </div>   
    )
}

export default Header;