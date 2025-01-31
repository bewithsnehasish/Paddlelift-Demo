import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function JobListSkeleton() {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black">
        <div className="mx-auto max-w-6xl space-y-6 p-6">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <Skeleton className="h-7 w-32" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-[180px]" />
              <Skeleton className="h-5 w-24" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-4 p-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <Skeleton className="h-6 w-[250px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="text-right">
                <Skeleton className="mb-2 h-5 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <div className="mb-4 flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
