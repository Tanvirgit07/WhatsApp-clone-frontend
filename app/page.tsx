import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      This page is no seen without authentication!
      <UserButton afterSignOutUrl='/sign-in'/>
    </div>
  );
}
