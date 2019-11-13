import { Medium } from "./medium.model"
import { App } from "./app.model"

export class Item {
    id: number;
    title: string;
    slug: string;
    description: string;
    media: Medium[];
    apps: App[];
}