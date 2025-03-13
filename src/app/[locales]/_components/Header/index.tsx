import React from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import NavLink from './nav-link';
import cn from 'classnames';
import Image from 'next/image';
import logo from '../../assets/images/logo.svg';
import LanguageSwitcher from '../LanguageSwitcher';

export const links = [
	{ href: '/', label: 'Home' },
	{ href: '/posts', label: 'Posts' },
	{ href: '/about-us', label: 'About Us' },
	{ href: '/contacts', label: 'Contacts' },
];

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container row">
				<strong className={cn(styles.header__logo, 'logo')}>
					<Link href="/">
						<Image src={logo} width={60} height={60} alt="logo" />
					</Link>
				</strong>
				<div className={styles.header__nav__burger}>
					<input type="checkbox" id="toggleCheck" className="toggleCheck visuallyHidden" />
					<label htmlFor="toggleCheck">
						<div className="hamburger">
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</div>
					</label>
					<nav className={styles.header__nav}>
						<ul>
							{links.map((link) => (
								<NavLink key={link.href} href={link.href}>
									{link.label}
								</NavLink>
							))}
						</ul>
					</nav>
				</div>
				<LanguageSwitcher />
			</div>
		</header>
	);
};

export default Header;
