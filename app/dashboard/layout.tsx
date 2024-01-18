"use client";

import React, { useEffect } from "react";
import { Links } from "../components/links";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Layoutレンダリング");
  }, []);
  return (
    <div>
      <h2>
        <Links />
      </h2>
      {children}
    </div>
  );
}
