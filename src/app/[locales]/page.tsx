// import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import JoinUsForm from './_components/JoinUs';
import Image from 'next/image';
import logo from '../[locales]/assets/images/logo.svg';
import { baseUrl } from './services';
import Intro from './_components/Intro';

export default function Home() {
	// const t = useTranslations();

	return (
		<main className={styles.main}>
			<Intro />
			<section className={styles.help}>
				<div className="container">
					<h2>help</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores, reiciendis
						quisquam atque natus praesentium omnis odit similique doloremque deserunt in dolores
						sapiente aliquam non
					</p>
					<ul>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Build With Bootstrap</h3>
							<p>Lorem ipsum dolor consetuer erat votpat dolore</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Awesome Design</h3>
							<p>Lorem ipsum dolor consetuer erat votpat dolore</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Clean Code</h3>
							<p>Lorem ipsum dolor consetuer erat votpat dolore</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Well Documentation</h3>
							<p>Lorem ipsum dolor consetuer erat votpat dolore</p>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.services}>
				<div className="container">
					<h2>services</h2>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores, reiciendis
						quisquam atque natus praesentium omnis odit similique doloremque deserunt in dolores
						sapiente aliquam non
					</p>
					<ul>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Web Design</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare neque ut
								felis dignissim, id pretium enim auctor. Curabitur maximus.
							</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Web Development</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare neque ut
								felis dignissim, id pretium enim auctor. Curabitur maximus.
							</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Brand Building</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare neque ut
								felis dignissim, id pretium enim auctor. Curabitur maximus.
							</p>
						</li>
						<li>
							<picture>
								<img
									src="https://belaltheme.com/html-preview/Formula/images/blog/1.jpg"
									alt="image description"
								/>
							</picture>
							<h3>Responsive Design</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare neque ut
								felis dignissim, id pretium enim auctor. Curabitur maximus.
							</p>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.statistics}>
				<div className="container">
					<ul>
						<li>
							<Image src={logo} width={60} height={60} alt="logo" />
							<h2>2500+</h2>
							<span>Global</span>
						</li>
						<li>
							<Image src={logo} width={60} height={60} alt="logo" />
							<h2>3200+</h2>
							<span>Happy Customer</span>
						</li>
						<li>
							<Image src={logo} width={60} height={60} alt="logo" />
							<h2>820+</h2>
							<span>Consultants</span>
						</li>
						<li>
							<Image src={logo} width={60} height={60} alt="logo" />
							<h2>1150+</h2>
							<span>Project Done</span>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.our_team}>
				<div className="container">
					<h2>
						Our <span>team</span>
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum magna mi, vel
						elementum neque dictum sit amet.
					</p>
					<ul>
						<li>
							<picture>
								<Image
									src={`${baseUrl}/${'img?.url'}`}
									width={500}
									height={300}
									quality={75}
									style={{
										width: '100%',
										height: 'auto',
									}}
									alt={'img?.alternativeText'}
								/>
								{/* <img src={`${baseUrl}/${img?.url}`} alt={img?.alternativeText} /> */}
							</picture>
							<h2>Williamson</h2>
							<span>Web developer</span>
						</li>
						<li>
							<picture>
								<Image
									src={`${baseUrl}/${'img?.url'}`}
									width={500}
									height={300}
									quality={75}
									style={{
										width: '100%',
										height: 'auto',
									}}
									alt={'img?.alternativeText'}
								/>
								{/* <img src={`${baseUrl}/${img?.url}`} alt={img?.alternativeText} /> */}
							</picture>
							<h2>Kristiana</h2>
							<span>Web designer</span>
						</li>
						<li>
							<picture>
								<Image
									src={`${baseUrl}/${'img?.url'}`}
									width={500}
									height={300}
									quality={75}
									style={{
										width: '100%',
										height: 'auto',
									}}
									alt={'img?.alternativeText'}
								/>
								{/* <img src={`${baseUrl}/${img?.url}`} alt={img?.alternativeText} /> */}
							</picture>
							<h2>Williamson</h2>
							<span>Web designer</span>
						</li>
						<li>
							<picture>
								<Image
									src={`${baseUrl}/${'img?.url'}`}
									width={500}
									height={300}
									quality={75}
									style={{
										width: '100%',
										height: 'auto',
									}}
									alt={'img?.alternativeText'}
								/>
								{/* <img src={`${baseUrl}/${img?.url}`} alt={img?.alternativeText} /> */}
							</picture>
							<h2>Mariana</h2>
							<span>Project manager</span>
						</li>
					</ul>
				</div>
			</section>
			<section className={styles.join_us}>
				<div className="container">
					<h2>Contact Us</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum magna mi, vel
						elementum neque dictum sit amet.
					</p>
					<div className={styles.join_us__wrapper}>
						<JoinUsForm />
						<div>
							<h3>Head Office</h3>
							<ul>
								<li>4578 Marmora St, Chicago D04 89GR</li>
								<li>
									<a href="tel:+100 123 1234 1110">+100 123 1234 1110</a>
								</li>
								<li>
									<a href="mailto:example@gmail.com">example@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
