import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './intro.module.scss';
// import Image from 'next/image';
// import { baseUrl } from './services';
import InfoBlock from '../InfoBlock';

const Intro = () => {
	const t = useTranslations();

	return (
		<section className={styles.intro}>
			<div className="container">
				<InfoBlock
					render={() => (
						<>
							<h1>
								Intro <span>Info</span>
							</h1>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error maiores, reiciendis
								quisquam atque natus praesentium omnis odit similique doloremque deserunt in dolores
								sapiente aliquam non eligendi ipsa fuga molestiae incidunt. Voluptatem animi
								consectetur tempore iste ratione, consequuntur vero nisi incidunt a magnam,
								reprehenderit, enim amet itaque atque provident delectus sapiente labore ex deserunt
								sed nihil quod beatae eligendi eaque. Pariatur?
							</p>
						</>
					)}
				/>
				<div className={styles.intro__buttons}>
					<button role="button" type="button">
						{t('readMoreBtn')}
					</button>
					<button role="button" type="button">
						{t('ourGoalBtn')}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Intro;
