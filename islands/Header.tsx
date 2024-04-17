import menus from "./menus.ts";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  return (
    <div class="w-full py-3 px-8 flex flex-col md:flex-row gap-4 bg-gray-600/5 shadow-md">
      <div class="flex items-center flex-1">
        <img
          src="/logo.png"
          width="42"
          height="42    "
          alt="the School Bud-E logo: a baby lion with a graduation cap"
        />
        <div class="text-2xl ml-1 font-bold">
          School Bud-E Templates
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
