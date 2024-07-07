import React from "react";
import Wrapper from "../Wrappers";
import Image from "next/image";
import { addCommas, formatDate } from "@/utils/customText";
import { LuBadgeCheck } from "react-icons/lu";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { Button } from "../Button";
import { HiOutlineDownload } from "react-icons/hi";
import { StarRating } from "../StarRating";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
export default function ExamDetailBanner({
  breadCrumb,
  examName,
  titleAddition,
  examLogo,
  brochureUrl,
  lastUpdate,
}: any) {
  return (
    <Wrapper
      as="section"
      containerClassName="mt-[4rem] px-5"
      className="orangeRedDownGradient rounded-2xl p-8 shadow-lg space-y-4"
    >
      {/* Upper Side  */}
      <p className="text-zinc-600">
        Home &gt; Exams &gt;{" "}
        <span className="text-orange-500">{breadCrumb}</span>
      </p>
      <div className="flex max-md:flex-col max-md:flex-col-reverse gap-5">
        {/* Left Side  */}
        <div className="flex gap-5 items-center">
            <h2 className="text-3xl font-bold md:text-4xl md:pt-2">
              {examName} : {titleAddition}
            </h2>
        </div>
        {/* Right Side  */}
          <div className="w-min rounded-2xl bg-white p-2">
            <Image
              src={examLogo}
              alt="banner"
              width={500}
              height={500}
              className="min-h-40 min-w-40 object-contain"
            />
          </div>
      </div>
        {/* Down Side  */}
        <div className="flex max-md:flex-col flex-wrap items-center justify-between">
          <p className="flex items-center gap-2">
            <FaClockRotateLeft className="text-xl" />
            <span>Updated on {lastUpdate}</span>
          </p>
          <div className="flex flex-wrap gap-5">
            <p className="flex items-center gap-2">
              <MdOutlineFileDownload className="text-xl" />
              <span>Save</span>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineQuestionCircle className="text-xl" />
              <span>Ask</span>
            </p>
            <div className="flex gap-5 flex-wrap max-md:flex-col">
            <Link href={brochureUrl || "#"}>
              <Button variant="white" className="text-nowrap shadow-lg !max-md:w-full">
                <span>Download Brochure</span>
                <HiOutlineDownload />
              </Button>
            </Link>
              <Button variant="black" className="text-nowrap shadow-lg !max-md:w-full">
                <span>Register</span>
                <HiOutlineDownload />
              </Button>
            </div>
          </div>
        </div>
    </Wrapper>
  );
}
