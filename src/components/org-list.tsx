import { Organization } from '@/interfaces';
import React from 'react';
import { Accordion } from './ui/accordion';
import SidebarItem from './sidebar-items';

interface OrgProps {
  getOrganizations: Organization[];
}
const OrgList = ({ getOrganizations }: OrgProps) => {
  return (
    <Accordion type="multiple" className="space-y-2">
      {getOrganizations?.map((org: Organization) => (
        <SidebarItem org={org} />
      ))}
    </Accordion>
  );
};

export default OrgList;