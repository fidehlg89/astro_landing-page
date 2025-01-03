import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps {
  direction: "previous" | "next";
  onClick: () => void;
  disabled: boolean;
}

export function CarouselButton({
  direction,
  onClick,
  disabled,
}: CarouselButtonProps) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center
        w-10 h-10 rounded-full
        bg-white shadow-md
        text-gray-600 hover:text-gray-900
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
      `}
      aria-label={`${direction} projects`}
    >
      <Icon size={24} />
    </button>
  );
}
