import { Item } from "./item.model"
import { Layout } from "./layout.model"

export class Sublist {
    id: number;
    title: string;
    slug: string;
    items: Item[];
    layouts: Layout[];
}