export function Popover({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>;
}

export function PopoverTrigger({
  children,
}: {
  asChild?: boolean;
  children: React.ReactNode;
}) {
  return <div className="cursor-pointer">{children}</div>;
}

export function PopoverContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute top-full right-0 md:left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
}
