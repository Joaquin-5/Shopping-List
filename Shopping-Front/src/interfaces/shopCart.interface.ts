import { Item } from "./item.interface";

export interface ShopCartItem extends Item{
    quantity: number,
}

export interface ShopCartCategory {
    _id: string,
    name: string,
    items: ShopCartItem[]
}