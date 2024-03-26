import SearchOverlay from "@/components/SearchOverlay";
import User from "@/components/User";
import Chat from "@/app/Chat/page";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <User />
      {/* <Sidebar /> */}
      <Chat />
      <SearchOverlay />
    </main>
  );
}
