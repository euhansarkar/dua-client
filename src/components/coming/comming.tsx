"use client";
import { Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#1a2537] flex flex-col items-center justify-center p-4 rounded">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-white">COMING</span>{" "}
          <span className="text-slate-400">SOON</span>
        </h1>
        <p className="text-slate-400 text-lg">
          InshaAllah this feature will be available very soon
        </p>
      </div>

      <div className="my-16 relative">
        <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center">
          <Box className="w-16 h-16 text-slate-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-400" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-400" />
        <div className="absolute top-1/4 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-slate-400" />
        <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-slate-400" />
      </div>

      <Button
        variant="default"
        className="bg-emerald-500 hover:bg-emerald-600"
        onClick={() => window.history.back()}
      >
        ← Back to Home
      </Button>
    </div>
  );
}
