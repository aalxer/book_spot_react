import NextIcon from '../../assets/icons/next-icon-thin.png'
import PrevIcon from '../../assets/icons/prev-icon-thin.png'
import '../../styles/NextAndPrevPageContainer.css'

interface nextAndPrevContext {
    currentPage: number;
    isLastPage: boolean;
    numberOfPageToDisplay: number;

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
        {isLastPage ? "" : <img onClick={nextFunction} src={NextIcon} alt="next-icon"/>}
    </div>

    function generateNumberOfPagesToDisplay(): numberOfPageItem[] {

        return isLastPage ? [{
            numberOfPage: currentPage - 1,
            className: "activePageNumber"
        }] : Array.from({length: 5}, (_, i) => ({
            numberOfPage: currentPage + i,
            className: (currentPage + i) === currentPage ? "activePageNumber" : "inactivePageNumber"
        }));
    }
}