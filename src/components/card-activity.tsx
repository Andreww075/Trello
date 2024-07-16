import { createAudLog } from "@/services/audit";
import ActivityItem from "./activity-item";
import React from "react";

const CardActivity = ({ auditDetails }: { auditDetails: CreateAudLog[] }) => {
  return (
    <div>
      <div className="w-full py-5">
        <p className="font-bold">Activity Logs</p>
        <ol className="mt-5">
          {auditDetails?.map((item) => (
            <ActivityItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CardActivity;