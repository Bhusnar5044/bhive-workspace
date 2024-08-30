const Header = () => {
  return (
    <header className="lg:h-{90px} h-[72px] border border-b border-headerBorder bg-white px-4 lg:border-0 lg:px-6">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between py-[18px] lg:py-4">
        <a href="/" className="flex items-center">
          <img src="/assets/logo.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        </a>
        <a
          href="/contact-us"
          className="rounded border border-primary2 p-2 focus:outline-none"
        >
          <img
            src="/assets/icons/call.svg"
            className="h-[1.125rem] lg:h-6"
            alt="contactUs"
          />
        </a>
        <h1 className="absolute top-36 hidden text-2xl text-textMain lg:block lg:w-2/5 lg:text-4xl">
          Host your meeting with world-class amenities. Starting at{' '}
          <span className="text-primary2">₹199/-!</span>
        </h1>
      </nav>
    </header>
  );
};

export default Header;
