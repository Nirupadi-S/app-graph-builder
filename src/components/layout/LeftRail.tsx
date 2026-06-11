import { Home, Boxes, Settings } from "lucide-react";

export default function LeftRail() {
  return (
    <aside className="w-16 border-r flex flex-col items-center py-4 gap-6 bg-white">
      <Home size={20} />
      <Boxes size={20} />
      <Settings size={20} />
    </aside>
  );
}