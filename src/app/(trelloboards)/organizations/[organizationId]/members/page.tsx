import React from 'react'
import AllMembers from '@/components/all-members'
import { prismaDB } from '@/providers/connection'
import { OrgId } from '@/interfaces'

const page = async ({ params: { organizationId } }: OrgId) => {
  const organization = await prismaDB.organization.findUnique({
    where: { id: organizationId },
    include: { users: true },
  });
  return (
    <div className="w-full">
      <AllMembers organization={organization} />
    </div>
  );
};

export default page;