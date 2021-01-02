export interface Cookie {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}
export interface Cookies{
    cookies: Array<Cookie>;
}