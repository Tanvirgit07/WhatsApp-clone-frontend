import DesktopSideBar from "./DesktopSideBar";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-full flex">
        <aside className="h-full min-w-[300px] bg-zinc-400">
            <DesktopSideBar />
        </aside>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
