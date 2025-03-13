import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div>
					&copy; {new Date().getFullYear()} <Link href="/">Group 113</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
