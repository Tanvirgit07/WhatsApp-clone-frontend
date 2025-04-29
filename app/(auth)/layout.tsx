import LogoPage from "./_components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <LogoPage />
      {children}
    </div>
  );
};
export default AuthLayout;
