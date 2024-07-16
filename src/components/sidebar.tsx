import React from 'react'
import CreateOrgForm from './create-org-form'
import OrgList from './org-list'
import { prismaDB } from '@/providers/connection'

const Sidebar = async () => {
  const getOrganizations = await prismaDB.organization.findMany();

  return (
    <div>
      <CreateOrgForm />
      <OrgList getOrganizations={getOrganizations} />
    </div>
  )
}

export default Sidebar