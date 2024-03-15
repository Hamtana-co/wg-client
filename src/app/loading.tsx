import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <Spinner color="secondary" />
        <span>درحال بارگذاری</span>
      </div>
    </div>
  );
}
