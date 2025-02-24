import React from "react";
import style from "./memberCard.module.scss";
import GrowthDown from "../../../../../public/svg/growth-down";
import GrowthUp from "../../../../../public/svg/growth-up";

function MemberCard({
  number,
  status,
  stats,
  downIndicator = false,
}: {
  number: string;
  status: string;
  stats: string;
  downIndicator: boolean;
}) {
  return (
    <div className={style.container}>
      <div className={[style.flex].join()}>
        <p className={style.number}>{number}</p>
        <p className={style.status}> {status}</p>
      </div>
      <div className={[style.flex,style.stats_container].join(" ")}>
        <div>
        {downIndicator ? (
         <GrowthDown />
        ) : (
         <GrowthUp />
        )}
        </div>
        <p className={style.stats}>{stats}</p>
      </div>
    </div>
  );
}

export default MemberCard;
