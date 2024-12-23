import { notFound } from 'next/navigation';

import { LOCALES, type Locale } from '@/i18n';

import './globals.css';

type RootLayoutArgs = Readonly<{
	children: React.ReactNode;
	params: Promise<{
		lang: Locale;
	}>;
}>;

export async function generateStaticParams() {
	return LOCALES.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }: RootLayoutArgs) {
	const { lang } = await params;

	if (!LOCALES.includes(lang)) {
		notFound();
	}

	return (
		<html lang={lang}>
			<head></head>
			<body>{children}</body>
		</html>
	);
}
