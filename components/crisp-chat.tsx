"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4ba10d94-51ba-465a-8abd-8f5222c90919");
  }, []);

  return null;
};