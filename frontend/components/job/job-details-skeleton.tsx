import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function JobDetailsSkeleton() {
  return (
    <div className="min-h-screen bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <Skeleton className="h-6 w-32" />
          <div className="mt-4 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                  <Skeleton className="h-8 w-3/4" />
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <Skeleton className="mt-2 h-4 w-48" />
                  </div>
                </div>
                <div className="mt-4 flex md:ml-4 md:mt-0">
                  <Skeleton className="h-6 w-24" />
                </div>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="mt-1 h-4 w-full sm:col-span-2 sm:mt-0" />
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </div>
              <div className="mt-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <dl className="mt-2 divide-y divide-gray-100">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="mt-1 h-4 w-full sm:col-span-2 sm:mt-0" />
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-6">
                <Skeleton className="h-6 w-48 mb-4" />
                <dl className="mt-2 divide-y divide-gray-100">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    >
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="mt-1 h-4 w-full sm:col-span-2 sm:mt-0" />
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <Card className="mt-8 bg-white">
            <div className="space-y-6 p-6">
              <Skeleton className="h-6 w-48" />
              <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ))}
              </div>
              <div>
                <Skeleton className="h-6 w-40 mb-4" />
                <Skeleton className="h-4 w-full mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="flex justify-end">
                <Skeleton className="h-10 w-40" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
