import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({ children, className }: Props) {
  return <section className={cn("container-shell", className)}>{children}</section>;
}
