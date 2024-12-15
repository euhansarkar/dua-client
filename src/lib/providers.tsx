"use client";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider
          disableHoverableContent
          delayDuration={500}
          skipDelayDuration={0}
        >
          {children}
          <ProgressBar
            height="4px"
            color="#e010d9"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
};

export default Providers;