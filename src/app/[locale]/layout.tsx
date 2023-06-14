import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import RollerCoaster from "@/components/icons/RollerCoaster";
import ThemeButton from "@/components/Header/ThemeButton";
import LanguageButton from "@/components/Header/LanguageButton";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { LayoutProps } from "@/interfaces/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "HackaCode - Theme Park",
	description:
		"A website developed for the HackaCode tournament.\
  		It consists in managing a park of dirversions, sales, employees, clients, etc. ",
};

export default function RootLayout({ children, params }: LayoutProps) {
	const locale = useLocale();

	if (params.locale !== locale) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<header className="flex p-3 justify-between items-center">
					<div>
						<Link href="/" className="font-bold flex gap-2 items-center px-7 text-lg">
							CodeCrafters
							<RollerCoaster className="w-9 h-9 fill-white mb-1" />
						</Link>
					</div>
					<div className="px-7 flex gap-3">
						<ThemeButton />
						<LanguageButton locale={locale} />
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}