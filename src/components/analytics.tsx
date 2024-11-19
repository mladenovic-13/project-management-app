import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-card";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row ">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total tasks"
            value={data.taskCount}
            variant={data.taskDifference > 1 ? "up" : "down"}
            increaseValue={data.taskDifference}
          />
        </div>
      </div>
    </ScrollArea>
  );
};
