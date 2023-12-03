"use client";

import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Templateレンダリング");
  }, []);
  return (
    <div>
      <h2></h2>
      {children}
    </div>
  );
}
