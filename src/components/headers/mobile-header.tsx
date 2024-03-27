"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";
import Router from "next/router";
import { useRouter } from "next/navigation";

export default function MobileHeader() {
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [hambergerMenu, sethambergerMenu] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cookies] = useCookies(["user"]);

  return (
    <nav
      className={
        isHidden == true
          ? "lg:hidden flex justify-between bg-[#151517] border-b-1 backdrop-blur-md items-center fixed top-0 left-0 right-0 rtl py-4 px-4 z-50 transition-transform translate-y-0"
          : "hidden justify-between bg-[#151517] border-b-1 backdrop-blur-md items-center fixed top-0 left-0 right-0 rtl py-4 px-4 z-50 transition-transform "
      }
    >
      <div className="flex items-center">
        <button onClick={() => sethambergerMenu(true)}>
          <Icon icon="solar:hamburger-menu-line-duotone" className="w-7 h-7" />
          {hambergerMenu == true ? (
            <div className="absolute w-[100vw] bg-[#5b595eb9] h-screen top-0 right-0 z-40 ">
              <div className="bg-[#201f22] w-[60vw] h-screen  p-3 flex flex-col justify-start items-start gap-5">
                <div className="flex justify-between items-center w-full border-b-2 pb-3">
                  <h1 className="text-[#D1BBFF] text-xl">
                    <Link href="/">We Gamers</Link>
                  </h1>
                  <button
                    onTouchStart={() => sethambergerMenu(false)}
                    onClick={() => sethambergerMenu(false)}
                  >
                    <Icon
                      icon="solar:close-square-bold-duotone"
                      className="w-8 h-8"
                    />
                  </button>
                </div>
                {/* <Link
                  href="/register"
                  className="flex justify-start items-center gap-2 w-full px-2"
                >
                  <Icon
                    icon="solar:user-plus-bold-duotone"
                    className="w-6 h-6"
                  />
                  قوانین سایت
                </Link> */}
                <Link
                  onTouchStart={() => sethambergerMenu(false)}
                  onClick={() => sethambergerMenu(false)}
                  href="/faq"
                  className="flex justify-start items-center gap-2 w-full px-2"
                >
                  <Icon
                    icon="solar:question-square-bold-duotone"
                    className="w-6 h-6"
                  />
                  سوالات متداول
                </Link>
                <button className="flex justify-start items-center gap-2 w-full px-2">
                  <Icon
                    icon="solar:phone-calling-bold-duotone"
                    className="w-6 h-6"
                  />
                  تماس با ما
                </button>
                <Link
                  href="/about-us"
                  className="flex justify-start items-center gap-2 w-full px-2"
                >
                  <Icon
                    icon="solar:info-square-bold-duotone"
                    className="w-6 h-6"
                  />
                  درباره ما
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </button>
      </div>
      <div className="flex items-center">
        <h1 className="text-[#D1BBFF] text-3xl">
          <Link href="/" className="text-[peyda] font-medium">
            We Gamers
          </Link>
        </h1>
      </div>
      <div className="flex items-center">
        <CookiesProvider>
          {cookies.user ? (
            <Link href="/account">
              <Icon icon="solar:user-bold-duotone" className="w-7 h-7" />
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth">
                <Icon icon="solar:user-bold-duotone" className="w-7 h-7" />
              </Link>
            </div>
          )}
        </CookiesProvider>
      </div>
    </nav>
  );
}
