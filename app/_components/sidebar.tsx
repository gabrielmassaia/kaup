import {
  LayoutDashboard,
  ShoppingBasketIcon,
  ShoppingCartIcon,
} from "lucide-react";
import SidebarButton from "./sidebar-button";

const SideBar = () => {
  return (
    <div className="w-64 bg-white">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">Kaup</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutDashboard size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <ShoppingBasketIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingCartIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default SideBar;
