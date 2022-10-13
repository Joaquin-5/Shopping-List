import { Item } from "./item.interface";

export interface Category {
    _id: string,
    name: string,
    items?: Item[] 
}