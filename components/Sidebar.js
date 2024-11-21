import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/users">User Management</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/moderation">Content Moderation</Link>
        </li>
      </ul>
    </aside>
  );
}
