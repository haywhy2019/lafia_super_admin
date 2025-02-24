"use client";
import MemberCard from "@/app/(dashboardLayout)/organisations/membersCard/MemberCard";
import PageHeader from "@/components/navigation/PageHeader";
import { Tile } from "@carbon/react";
import Image from "next/image";
import style from "./organisation.module.scss";
import React from "react";
import OrganisationTable from "./table/OrganisationTable";

function OrganisationsPage() {
  return (
    <Tile>
      <PageHeader
        image={
          <Image src="/svg/dashboardNotice.svg" alt="" width={36} height={36} />
        }
        title={`Organisations`}
        text="Manage all tenants (organisation) on the platform."
      />
      <Tile className={style.tile_padding}>
        <div className={style.flex}>
          <MemberCard
            number={"200"}
            status="Active"
            stats={"+10% since last month"}
            downIndicator={false}
          />
          <MemberCard
            number={"189"}
            status="Inactive"
            stats={"+10% since last month"}
            downIndicator={false}
          />
          <MemberCard
            number={"11"}
            status="Pending"
            stats={"+10% since last month"}
            downIndicator={false}
          />
        </div>
      </Tile>
    <div className={style.table}>
    <OrganisationTable />
    </div>
  
    </Tile>
  );
}

export default OrganisationsPage;
