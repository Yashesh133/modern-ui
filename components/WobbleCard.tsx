"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import GridGlobe from "./ui/GridGlobe";

export function WobbleCardDemo({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {id === 1 && (
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className="bg-transparent"
        >
          <div className="max-w-lg">
            <h2
              className={`text-left w-full inline-block z-10 text-lg md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white ${titleClassName}`}
            >
              {title}
            </h2>
          </div>
          <Image
            src={img || "/linear.webp"}
            width={700}
            height={700}
            alt="linear demo image"
            className={`absolute -z-10 h-full w-full filter top-0 left-24 object-contain rounded-2xl ${imgClassName}`}
          />
        </WobbleCard>
      )}
      {id === 2 && (
        <WobbleCard
          containerClassName="col-span-1 min-h-[300px]"
          className="bg-transparent"
        >
          <GridGlobe />
        </WobbleCard>
      )}
    </div>
  );
}
