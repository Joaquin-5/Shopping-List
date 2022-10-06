import { Category } from "./category.interface";

export interface Item {
    _id: string,
    name: string,
    category: Category,
    note?: string,
    image?: string
}