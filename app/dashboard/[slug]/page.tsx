"use client";

import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>dashboard: {params.slug}</div>
      <Link href={`/dashboard/${Number(params.slug) + 1}`}>
        Go to next page
      </Link>
    </>
  );
}
