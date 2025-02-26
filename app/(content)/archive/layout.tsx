import { ReactNode } from "react";

interface ArchiveLayoutProps {
  archive: ReactNode;
  latest: ReactNode;
}

export default function ArchiveLayoutPage({ archive, latest }: ArchiveLayoutProps) {
  return (
    <main>
      <h1>Archive News</h1>
      <section>{archive}</section>
      <section>{latest}</section>
    </main>
  );
}
