"use client";
import { useEffect } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

export default function Popup({
  isOpen,
  onClose,
  type,
  title,
  message,
}: PopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div
      className={`fixed top-6 right-6 z-[9999] w-[420px] shadow-lg transform transition-all duration-300 ease-out ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${isSuccess ? "bg-green-500" : "bg-red-500"}`}
    >
      <div className="px-5 py-3 flex items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
          {isSuccess ? (
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm">
            {title} <span className="font-normal opacity-90">{message}</span>
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white opacity-80 hover:opacity-100 transition-opacity duration-200"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-0.5 bg-white bg-opacity-30">
        <div
          className="h-full bg-white"
          style={{
            animation: "progress 5s linear forwards",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
