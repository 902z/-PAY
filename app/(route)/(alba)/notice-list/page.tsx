import React from "react";
import CustomizedNotice from "./_components/customized-notice";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/notice";
// import NoticeCard from "@/app/_components/notice-card";
// import FilterButton from "./_components/filter-button";
import NoticeWithFilter from './_components/notice-with-filter';

export default async function page() {
  const customizedNotices = await getCustomizedNotices({});
  const allNotices = await getAllNotices({});

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      <div className="mb-10 bg-red-10 px-4 py-12">
        <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[1000px]">
          <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
            맞춤 공고
          </h2>
          <CustomizedNotice notices={customizedNotices} />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col px-4 md:justify-center lg:max-w-[964px]">
            <NoticeWithFilter allNotices={allNotices}/>
      </div>
    </div>
  );
}
