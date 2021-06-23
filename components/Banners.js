import styles from '../styles/Banners.module.css'

export function BannerLogin() {
	return (
		<div className={styles.bannercontainer}>
			<div className={styles.home}>
  				<div className={styles.bannertext}>
    				<h1 className={styles.btext}></h1>
    				<p className={styles.sbtext}></p>
  				</div>
			</div>
		</div>
	)
};

export function BannerAccount() {
	return (
		<div className={styles.bannercontainer}>
			<div className={styles.account}>
  				<div className={styles.bannertext}>
    				<h1 className={styles.btext}></h1>
    				<p className={styles.sbtext}></p>
  				</div>
			</div>
		</div>
	)
};