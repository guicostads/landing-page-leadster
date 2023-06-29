import { Header } from "@/app/components/Header";
import { TopLogo } from "./components/TopLogo";
import { VideosList } from "./components/VideosList";

export default function Home() {
  return (
    <main>
      <TopLogo />
      <Header />
      <VideosList />
    </main>
  );
}
