import menus from "../islands/menus.ts";

export default function Home() {
  const getColumnClass = () => {
    const count = menus.length;
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-2";
    if (count >= 3 && count <= 4) return "grid-cols-3";
    if (count >= 5 && count <= 8) return "grid-cols-4";
    if (count > 8) return "grid-cols-4"; // or however many columns you deem suitable beyond 8 items
  };

  return (
    <div class="grid place-items-center h-screen">
      <div
        class={`grid ${getColumnClass()} gap-6 px-6`}
      >
        {menus.map((menu, index) => (
          <a
            key={index}
            href={`/components/${menu.href}`}
            class="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="w-96 flex items-center justify-center">
              <img
                src={`cards/` + menu.href + ".png"}
                alt={menu.name}
                class="p-4 bg-white"
              />
            </div>
            <div class="p-4 text-center bg-orange-600 text-white tracking-wider font-bold self-end h-full">
              {menu.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
