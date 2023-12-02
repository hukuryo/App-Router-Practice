"use client";

import React, { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Layoutレンダリング");
  }, []);
  return (
    <div>
      <h2>Layout Header</h2>
      {children}
    </div>
  );
}
