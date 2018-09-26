import { Category } from './category.enum';

export interface ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable?: boolean;
    reviews?: string[];
}
