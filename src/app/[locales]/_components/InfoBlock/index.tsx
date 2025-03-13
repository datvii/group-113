import React from 'react';
import styles from './infoBlock.module.scss';

export type TInfoBlock = {
	render: () => string | React.ReactElement<unknown, string> | null | undefined;
};

const InfoBlock = ({ render }: TInfoBlock) => <div className={styles.infoBlock}>{render()}</div>;

export default InfoBlock;
