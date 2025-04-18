"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRightLeft, Banknote, Gift, Wallet, Menu, X } from "lucide-react";
import DashboardIcon from "./dashboard-icon";
import { cn } from "@/lib/utils";

const links = [
  {
    id: 0,
    name: "dashboard",
    href: "/",
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    name: "wallet",
    href: "/wallet",
    icon: <Wallet className="size-5" />,
  },
  {
    id: 3,
    name: "merchant",
    href: "/merchant",
    icon: <Banknote className="size-5" />,
  },
  {
    id: 4,
    name: "transactions",
    href: "/transactions",
    icon: <ArrowRightLeft className="size-5" />,
  },
  {
    id: 5,
    name: "beneficiaries",
    href: "/beneficiaries",
    icon: <Gift className="size-5" />,
  },
];

export function SiteHeader() {
  const [active, setActive] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative h-(--header-height) flex shrink-0 items-center font-sans gap-2 py-2.5 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-6 lg:gap-2 lg:px-6">
        <h1 className="text-lg font-bold">Clearerpay</h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <div className="ml-auto hidden lg:flex items-center gap-2">
          {/* Desktop Navigation */}
          <nav className="absolute top-0 bottom-0 left-[140px]">
            <ul className="flex items-center gap-6">
              {links.length > 0 ? (
                links.map((link) => (
                  <li key={link.id}>
                    <Link
                      className={cn(
                        "capitalize flex items-center text-xs lg:text-sm py-[15.4px] space-x-1 mb-3 transition-all duration-200",
                        active === link.href
                          ? "border-b-2 border-neutral-800 font-semibold"
                          : "border-b-0 text-neutral-500 hover:text-neutral-800"
                      )}
                      onClick={() => setActive(link.href)}
                      href={link.href}
                    >
                      {active === link.href && <span>{link.icon}</span>}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <p>No link found</p>
              )}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="px-2.5 py-1.5 flex items-center space-x-2 bg-neutral-600 text-neutral-50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className=" text-xs lg:text-sm">Personal Account</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="text-xs lg:text-sm text-primary flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>Settings</p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-white lg:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-lg font-bold">Clearerpay</h1>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                        active === link.href
                          ? "bg-neutral-100 text-neutral-900 font-semibold"
                          : "text-neutral-600 hover:bg-neutral-50"
                      )}
                      onClick={() => {
                        setActive(link.href);
                        setIsMenuOpen(false);
                      }}
                      href={link.href}
                    >
                      <span>{link.icon}</span>
                      <span className="capitalize">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t p-4 space-y-4">
              <div className="flex items-center space-x-2 p-2 bg-neutral-600 text-neutral-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Personal Account</span>
              </div>
              <button className="flex items-center space-x-2 w-full p-2 text-primary hover:bg-neutral-50 rounded-lg transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
