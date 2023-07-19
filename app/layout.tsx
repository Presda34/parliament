import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lato, Noto_Color_Emoji } from 'next/font/google';
import { countries } from 'country-data';
import { parliamentInformation } from './parlamentInformation';
import { H2 } from '@/components/headings';
import MobileNav from '@/components/mobileNav';
import Image from 'next/image';
import { userAgent } from 'next/server';
import FlagEmoji from '@/components/flagEmoji';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = parliamentInformation.map(
    (parliament) => parliament.country,
  );

  return (
    <html lang="en">
      <link rel="icon" href="https://fav.farm/🏛️" />
      <body className={lato.className + ' bg-stone-100'}>
        <MobileNav navItems={navItems} />
        <div className="w-full flex min-h-screen">
          <aside
            className="hidden md:inline-flex w-0 md:w-80 bg-white shadow-lg px-4 py-4 flex flex-col gap-4"
          >
            <a href="/">
              <H2>Parliament Sim</H2>
            </a>
            {navItems.map((navItem) => (
              <a key={navItem} href={`/${navItem}`}>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    <FlagEmoji>
                      {countries[navItem.toLocaleUpperCase()].emoji}
                    </FlagEmoji>
                  </div>
                  <div>{countries[navItem.toLocaleUpperCase()].name}</div>
                </div>
              </a>
            ))}
          </aside>
          <main className=" w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
