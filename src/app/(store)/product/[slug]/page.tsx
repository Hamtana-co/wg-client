import { userService } from "@/app/(account)/account/service";
import SingleProduct from "@/components/shop/single-product";
import { useQuery } from "@tanstack/react-query";
import { Metadata } from "next";

export default function Product() {
//   const productQuery = useQuery({
//     queryKey: ["GET_USER"],
//     queryFn: () => userService.get(2),
//   });

  return (
    <>
      <SingleProduct />
    </>
  );
}

export const metadata: Metadata = {
  title: "We Gamers",
  description: "Gaming Platform",
};
