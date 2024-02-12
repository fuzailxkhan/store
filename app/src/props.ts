
export interface product{
    id:number;
    image:string[];
    title:string;
    price:number;
    description:string;
}

export interface cartProduct{
    id:number;
    image:string[];
    title:string;
    price:number;
    description:string;
    quantity:number;
}

export interface responseProduct{
    id:number;
    image:{type:string,data:[]}[];
    title:string;
    price:number;
    description:string;
} 