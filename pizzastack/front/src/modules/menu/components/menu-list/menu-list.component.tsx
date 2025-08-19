import flowersList from "@app/moks/flovers.json";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";
import { Flower } from "../../types/flower";
import { FC } from "react";

interface MenuListProps {
  items: Flower[],

}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return <div className="flex flex-wrap gap-10 pt-10 justify-center">
    {items.map(({image, ...flower}) => (
        <MenuItem {...flower} imagePath={'/assets/flowers/'+image} key={`flower=${flower.id}`}/>
    ))}
  </div>;
};
