import CarouselComponent from "@/components/carousel";
import AccrodPage from "@/components/accordion";
import { NavigationMenuDemo } from "@/components/navigation";
import { ModeToggle } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-5">
      <div className="flex justify-between">
        <NavigationMenuDemo />
        <ModeToggle />
      </div>
      <div className="flex justify-center space-x-6">
        <div className="p-12">
          <CarouselComponent />
        </div>
        <div className="p-12">
          <CarouselComponent />
        </div>
      </div>
      <div>
        <AccrodPage />
      </div>
    </main>
  );
}
