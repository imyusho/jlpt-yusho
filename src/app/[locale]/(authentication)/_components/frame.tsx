"use client";

import Redirect from "@/components/redirect";
import { useAuth } from "@/context/AuthContext";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

type Props = {
  image: StaticImageData;
  children: ReactNode;
};

export const Frame: FC<Props> = ({ image, children }) => {
  const { user } = useAuth();

  if (user) return <Redirect to="dashboard" />;

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              ゆ
            </div>
            JLPT Yusho
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="hidden lg:block h-0 min-h-full">
        <Image
          className="size-full object-cover"
          src={image}
          alt=""
          aria-hidden="true"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
