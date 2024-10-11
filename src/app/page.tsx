"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Link
        href={{
          pathname: "/idle",
        }}
      >
        Idle
      </Link>
      <Link
        href={{
          pathname: "/faulty",
        }}
      >
        Faulty
      </Link>
      <Link
        href={{
          pathname: "/faulty2",
        }}
      >
        Faulty - 2
      </Link>
      <Link
        href={{
          pathname: "/onapproach",
          query: { status: "idle" },
        }}
      >
        On Approach
      </Link>
      <Link
        href={{
          pathname: "/charging",
          query: { status: "occupied", charging: "true", percentage: "75" },
        }}
      >
        Charging Page - Plugged
      </Link>
    </div>
  );
}
