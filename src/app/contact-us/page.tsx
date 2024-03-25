import { Metadata } from "next";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="flex flex-col gap-3 py-28 lg:py-36 px-5">
      <div className="container mx-auto w-full rounded-3xl bg-[#ffffff14] py-8 px-10">
        <h1 className="text-2xl font-[peyda] font-bold pb-8 text-amber-500">تماس با ما</h1>
        <p className="leading-10 pr-2">
          ما گیمر ها ( we gamers ) یک پلتفرم گیمینگ هست که در جهت پیشرفت و توسعه
          جامعه گیمری و اطلاع رسانی اخبار گیم به کاربران و تشکیل جمع های دوستانه
          در بین گیمر ها درست شده است
          <br></br>
          <h2 className="text-xl font-[peyda] font-semibold py-5">
            خدمات ما :
          </h2>
          <ul className="pr-2">
            <li>برگذاری تورنومنت بازی های مختلف</li>
            <li>
              پنل مدیریت برای ساخت و برگذاری تورنومنت (ابتدا ثبت نام کنید سپس در
              حساب کاربری درخواست پنل تورنومنت ارسال کنید)
            </li>
            <li>اطلاع رسانی اخبار مهم در حوزه بازی در بخش وبلاگ</li>
            <li>آموزش های متنی و ویدیویی در حوزه گیم در بخش وبلاگ</li>
            <li>امکان تشکیل تیم با دوستان در بخش تیم ها</li>
            <li>امکان عضویت در تیم های مختلف برای شرکت در تورنومنت</li>
          </ul>
        </p>
        <div>
          <h4 className="text-xl font-[peyda] font-semibold py-5">
            راه های ارتباط با ما:
          </h4>
          <div
            className="lg:flex items-start
           flex flex-col gap-3"
          >
            <div>
              <Image
                src="/social-icons/instagram.png"
                width={45}
                height={45}
                alt="instagram"
              />
            </div>
            <div>
              <Image
                src="/social-icons/discord.png"
                width={45}
                height={45}
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "We Gamers | درباره ما",
  keywords: "we gamers درباره ما گیمر ها",
  robots: "index, follow",
  description:
    "ما گیمر ها ( we gamers ) یک پلتفرم گیمینگ هست که در جهت پیشرفت و توسعه جامعه گیمری و اطلاع رسانی اخبار گیم به کاربران و تشکیل جمع های دوستانه در بین گیمر ها درست شده است",
};
