import Image from "next/image";

export default function MainSlider() {
  return (
    <>
      <div className="hidden lg:flex w-full h-full ">
        <Image
          className="w-full h-full object-cover"
          src="/ExitLag.webp"
          width={1900}
          height={440}
          alt="test"
        />
      </div>
      <div className="lg:hidden w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src="/test.webp"
          width={500}
          height={300}
          alt="test"
        />
      </div>
    </>
  );
}
