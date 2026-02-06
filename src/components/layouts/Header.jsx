import {
  Menu,
  Bell,
  Search,
  ChevronDown,
  CircleUserRound,
  LogOut,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header({ setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-20 h-14 bg-white flex items-center px-7 pl-10 gap-4 shadow-sm">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden cursor-pointer"
      >
        <Menu />
      </button>

      <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
        <Input placeholder="Search" className="pl-9 bg-neutral-100" />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <article className="relative cursor-pointer">
          <Bell size={18} />
          <span className=" absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full" />
        </article>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <article className="flex items-center gap-3 bg-neutral-100 px-2 py-1 rounded-full cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Jahangir Khan</span>
                <span>
                  <ChevronDown size={15} />
                </span>
              </article>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem className="flex items-center gap-3">
                  <CircleUserRound /> Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center gap-3 text-red-400">
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
