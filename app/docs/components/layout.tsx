import { styles } from "styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="is_components">{children}</main>;
}
