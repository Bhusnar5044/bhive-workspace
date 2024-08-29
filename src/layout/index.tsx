import type { ReactNode } from 'react';

import { ThemeProvider } from '@/components/theme-provider';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <Meta />
      <div className="dark:bg-black flex min-h-screen flex-col bg-lightGray text-textMain dark:text-white">
        <Header />
        <section className="mb-5 flex flex-wrap-reverse">
          <div className="flex w-full items-center justify-start bg-banner px-4 lg:w-2/3 lg:px-0">
            <h1 className="text-2xl text-textMain lg:text-4xl">
              Host your meeting with world-class amenities. Starting at{' '}
              <span className="text-primary2">₹199/-!</span>
            </h1>
          </div>
          <img
            src="/assets/coworkBanner.svg"
            alt="coworkBanner"
            className="w-full lg:w-1/3"
          />
        </section>
        <main className="mx-auto max-w-screen-xl px-4 lg:px-0">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
