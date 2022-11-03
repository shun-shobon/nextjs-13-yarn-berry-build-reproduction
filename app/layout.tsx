import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
