import { ReactNode } from "react";

interface ArchiveLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function ModalLayoutPage({ children, modal }: ArchiveLayoutProps) {
  return (
    <main>
      <section>{children}</section>
      <section>{modal}</section>
    </main>
  );
}
