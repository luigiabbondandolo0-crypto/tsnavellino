"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface RainbowButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  type?: "button" | "submit";
  icon?: React.ReactNode;
}

export function RainbowButton({
  href,
  onClick,
  children,
  variant = "dark",
  className,
  type = "button",
  icon,
}: RainbowButtonProps) {
  const inner = (
    <span
      className={cn(
        "relative z-10 flex items-center gap-2.5 px-9 py-4 text-sm font-bold tracking-wide rounded-[0.65rem] transition-opacity duration-200 hover:opacity-90",
        variant === "dark"
          ? "text-white"
          : "text-[#0C0A09]"
      )}
    >
      {children}
      {icon}
    </span>
  );

  const wrapper = cn(
    "tsn-rainbow-btn inline-flex items-center justify-center p-[2px] cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200",
    className
  );

  if (href) {
    return (
      <Link href={href} className={wrapper}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={wrapper}>
      {inner}
    </button>
  );
}

/* Download button — flat style matching the demo */
interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function DownloadButton({ href, children, className }: DownloadButtonProps) {
  return (
    <a
      href={href}
      download
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-between text-[#44403C] text-sm h-12 w-full pl-4 bg-white border border-[#E8E4DC] rounded-lg hover:border-[#CA8A04]/40 active:scale-[0.98] transition-all duration-200 cursor-pointer group",
        className
      )}
    >
      <span className="group-hover:text-[#CA8A04] transition-colors duration-200">{children}</span>
      <div className="bg-[#F5F3EF] group-hover:bg-[#CA8A04] h-full flex items-center justify-center px-4 rounded-r-lg transition-colors duration-200">
        <svg width="16" height="16" viewBox="0 0 20 21" fill="none">
          <path
            d="M17.5 13.125v3.5c0 .464-.176.91-.488 1.237a1.63 1.63 0 0 1-1.179.513H4.167c-.442 0-.866-.184-1.179-.513a1.8 1.8 0 0 1-.488-1.237v-3.5M5.833 8.75 10 13.125m0 0 4.167-4.375M10 13.125v-10.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#CA8A04] group-hover:text-white transition-colors duration-200"
          />
        </svg>
      </div>
    </a>
  );
}
