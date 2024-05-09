export interface Book {
    id ? :number;
    title:string;
    subtitle ? :string;
    isbn:number;
    abstract ? :string;
    author ? :string;
    publisher ? :string;
    price ? :number;
    numPages ? :number;
    cover ? :string;
    userId ? :number;
}