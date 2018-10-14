import { Category } from './category.enum';

export interface ProductModel {
    name: string;
    description: string;
    price: number;
    category: Category;
    createdDate: Date;
    isAvailable?: boolean;
    reviews?: string[];
}
