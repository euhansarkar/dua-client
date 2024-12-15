"use client";

import { motion } from "framer-motion";

export default function BlogSpinner() {
  return (
    <div className="w-full max-w-2xl p-4 mx-auto">
      <div className="w-full rounded-lg bg-slate-900 p-4 shadow-xl">
        <div className="flex items-center gap-4">
          {/* Avatar skeleton */}
          <div className="relative overflow-hidden rounded-full bg-slate-800 w-10 h-10">
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"
              animate={{ translateX: ["0%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Title skeleton */}
          <div className="relative flex-1 overflow-hidden rounded-lg bg-slate-800 h-4">
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"
              animate={{ translateX: ["0%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Content skeleton lines */}
        <div className="mt-4 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg bg-slate-800 h-4"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"
                animate={{ translateX: ["0%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            </div>
          ))}
        </div>

        {/* Action items skeleton */}
        <div className="mt-6 flex gap-2 justify-end">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-md bg-slate-800 w-8 h-8"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"
                animate={{ translateX: ["0%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
