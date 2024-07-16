import React from 'react'
import ActivityItem from '@/components/activity-item'
import { OrgId } from '@/interfaces'
import { prismaDB } from '@/providers/connection'

const Activitypage = async ({ params }: OrgId) => {
  const getAllActivities = await prismaDB.audLog.findMany({
    where: { orgId: params.organizationId },
  });
  console.log(getAllActivities);
  return (
    <>
      <ol className="mt-5">
        {getAllActivities?.map((item) => (
          <ActivityItem key={item.id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default Activitypage;