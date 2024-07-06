export interface nextAndPrevContext {
    currentPage: number;
    lastPage: number;
    numberOfPageToDisplay: number;

    nextFunction(): void;

    prevFunction(): void;

    goToPage(page:number):void;
    goToFirstPage():void;
    gotToLastPage():void;
}