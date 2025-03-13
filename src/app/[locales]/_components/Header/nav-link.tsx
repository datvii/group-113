import Link from 'next/link';
import styles from './header.module.scss';
import cn from 'classnames';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { headers } from 'next/headers';

export function middleware(request: NextRequest) {
	const headers = new Headers(request.headers);

	headers.set('x-current-path', request.nextUrl.pathname);
	headers.set('x-next-intl-locale', request.nextUrl.locale);

	return NextResponse.next({ headers });
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default async function NavLink({ href, children }: Readonly<NavLinkProps>) {
	const headerList = await headers();
	const pathname = headerList.get('x-current-path');
	// const locale = headerList.get('x-next-intl-locale');
	// console.log(headerList.get('x-next-intl-locale'));
	const isActive = href === '/' ? pathname === '/' : pathname?.startsWith(href);

	return (
		<li>
			<Link href={href} className={cn({ [styles.header__nav_active]: isActive })}>
				{children}
			</Link>
		</li>
	);
}
