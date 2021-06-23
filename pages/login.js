import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import { BannerLogin } from '../components/Banners'

import styles from '../styles/Login.module.css'


export default function Login() {

	const [email, setEmail] = useState("")
	const { loginUser } = useContext(AuthContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		loginUser(email)
	}


	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="description" content="Login here you make your purchase" />
			</Head>

			<BannerLogin />
			<div className={styles.loginformcont}>
			  <div className={styles.loginform}>
				<h2 className={styles.loginheader}>Login / Signup</h2>
					<form className={styles.form}onSubmit={handleSubmit}>
						<input 
						 className={styles.input}
						 type="email" 
						 value={email} 
						 onChange={(event) => setEmail(event.target.value)} 
						 placeholder="Email Address"
						/>
				   <button className={styles.button} type="submit">Login</button>
			     </form>
			     <p className={styles.loginformpara}>passwordless login</p>
			     </div>
		      </div>
		    </div>
	)
}