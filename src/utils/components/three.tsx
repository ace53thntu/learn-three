"use client";

import { FC, PropsWithChildren } from "react";
import { r3f } from "../global";

export const Three: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <r3f.In>{children}</r3f.In>;
};

Three.displayName = "Three";
