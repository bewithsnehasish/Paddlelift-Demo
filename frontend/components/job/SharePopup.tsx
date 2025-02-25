"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

export const SharePopup = ({
  jobTitle,
  jobId,
}: {
  jobTitle: string;
  jobId: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const jobLink = `${window.location.origin}/jobs/${jobId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jobLink);
    toast.success("Link copied to clipboard!");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#share-popup")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="ml-2 rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-gray-200 hover:text-black"
      >
        Share
      </button>

      {isOpen && (
        <div
          id="share-popup"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative w-100 rounded-lg bg-white p-4 shadow-xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 rounded-full p-1 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-black">{jobTitle}</h3>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="text"
                value={jobLink}
                readOnly
                className="flex-1 truncate rounded border border-gray-300 px-2 py-1 text-sm text-black"
              />
              <button
                onClick={copyToClipboard}
                className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
