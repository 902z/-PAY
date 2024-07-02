import AlertCard from "./alert-card";
import { IntersectionArea } from "../../../../interception-area";
import { getUsersUserIdAlerts } from "@/app/_apis/type";

interface AlertProps {
  alerts: getUsersUserIdAlerts["items"];
  onImpression: () => void;
}

export default function AlertList({ alerts, onImpression }: AlertProps) {
  return (
    <ul className="h-[calc(100%-46px)] overflow-auto">
      {alerts.length > 0 ? (
        alerts.map((item, index) => {
          if (alerts.length === index + 1)
            return (
              <IntersectionArea key={item.item.id} onImpression={onImpression}>
                <AlertCard item={item} />
              </IntersectionArea>
            );
          return <AlertCard key={item.item.id} item={item} />;
        })
      ) : (
        <p className="text-gray-50">알림이 없어요! 오는 대로 말씀 드릴게요!!</p>
      )}
    </ul>
  );
}
