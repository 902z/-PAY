import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export const metadata = {
  title: "내 가게 상세",
};

export default function ShopDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="base-container">
      <h2 className="pb-4 font-bold text-l md:text-2xl">내 가게</h2>
      {children}
    </div>
  );
}
