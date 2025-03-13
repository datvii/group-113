import type { Metadata } from 'next';
import { Montserrat, Geist_Mono } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import './globals.css';
import Head from 'next/head';

const montserratSans = Montserrat({
	variable: '--font-montserrat-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Help 113 group',
	description: 'This website serves for helping military injured ukrainins people',
};

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	return (
		<html lang={params.locale} suppressHydrationWarning>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<body className={`${montserratSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
