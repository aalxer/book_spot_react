export interface nextAndPrevContext {
    currentPage: number;
    isLastPage: boolean;
    numberOfPageToDisplay: number;

    nextFunction(): void;

    prevFunction(): void;

    goToPage(page:number):void;
}