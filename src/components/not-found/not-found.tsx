import { Button } from "@/components/ui/button";

export function DataNotFound({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 bg-[#0E1319] p-8 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-white">Data Not Found</h2>
      <p className="text-sm text-muted-foreground text-center">
        {message || "We couldn’t find the content you’re looking for."}
      </p>
      <Button
        variant="ghost"
        onClick={() => window.history.back()} // Navigate to the previous page
        className="text-[#1FA45B] hover:bg-[#1E2732]"
      >
        Go Back
      </Button>
    </div>
  );
}
