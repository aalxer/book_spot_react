import NextIcon from '../../images/next-icon-thin.png'
import PrevIcon from '../../images/prev-icon-thin.png'
import './NextAndPrevPageContainer.css'

interface nextAndPrevContext {
    currentPage: number;
    isLastPage: boolean;
    numberOfPageToDisplay?: number;

    nextFunction(): void;

    prevFunction(): void;
}

interface numberOfPageItem {
    numberOfPage: number;
    className: string;
}

export default function NextAndPrevPageContainer({
                                                     currentPage,
                                                     nextFunction,
                                                     prevFunction,
                                                     isLastPage
                                                 }: nextAndPrevContext) {
    return <div className="nextAndPrevContentCotaniner">
        <img onClick={prevFunction} src={PrevIcon} alt="previous-icon"/>
        {generateNumberOfPagesToDisplay().map((item) => {
            return <p className={item.className}>{item.numberOfPage}</p>
        })}
        <img onClick={nextFunction} src={NextIcon} alt="next-icon"/>
    </div>

    function generateNumberOfPagesToDisplay(): numberOfPageItem[] {

        return isLastPage
            ? [{numberOfPage: currentPage, className: "activePageNumber"}]
            : Array.from({length: 5}, (_, i) => ({
                numberOfPage: currentPage + i,
                className: (currentPage + i) === currentPage ? "activePageNumber" : "inactivePageNumber"
            }));
        /*

        if (isLastPage) {
            currentNumbersOfPages.push({
                numberOfPage: currentPage,
                className: "activePageNumber"
            })
        } else {
            for (let i: number = currentPage; i < currentPage + 5; i++) {
                currentNumbersOfPages.push({
                    numberOfPage: i,
                    className: i === currentPage ? "activePageNumber" : "inactivePageNumber"
                })
            }
        }
        return currentNumbersOfPages;

         */
    }
}