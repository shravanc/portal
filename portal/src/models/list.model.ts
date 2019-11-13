import {Item} from "./item.model";
import {Layout} from "./layout.model";
import {Sublist} from "./sublist.model";

export class List {
    id: number;
    title: string;
    slug: string;
    items: Item[];
    layouts: Layout[];
    sublists: Sublist[];
  }