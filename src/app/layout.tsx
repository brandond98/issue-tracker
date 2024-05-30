"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const navLinks = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Issues",
    href: "/issues",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto`}>
        <NavigationMenu className="bg-gray-300 min-w-full my-5 p-3 rounded-md">
          {navLinks.map((link) => (
            <NavigationMenuLink
              key={link.name}
              className={`${navigationMenuTriggerStyle()} bg-transparent mx-3 font-bold`}
              href={link.href}
              active={isActive(link.href)}
            >
              {link.name}
            </NavigationMenuLink>
          ))}
        </NavigationMenu>
        {children}
      </body>
    </html>
  );
}
