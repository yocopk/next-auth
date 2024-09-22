interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center w-full justify-center gap-y-4">
      <h2 className="text-5xl font-bold">Auth</h2>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
