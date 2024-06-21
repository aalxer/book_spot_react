import NextIcon from '../../assets/icons/next-icon-thin.png'
import PrevIcon from '../../assets/icons/prev-icon-thin.png'
import '../../styles/NextAndPrevPageContainer.css'
import {nextAndPrevContext} from "../../types/NextAndPrevContext";

interface numberOfPageItem {
    numberOfPage: number;
    className: string;
}

export default function NextAndPrevPageContainer({
                                                     currentPage,
                                                     isLastPage,
                                                     numberOfPageToDisplay,
                                                     nextFunction,
                                                     prevFunction,
                                                     goToPage,

                                                 }: nextAndPrevContext) {
    return <div className="nextAndPrevContentCotaniner">
        <img onClick={prevFunction} src={PrevIcon} alt="previous-icon"/>
        {generateNumberOfPagesToDisplay().map((item) => {
            return <p onClick={() => goToPage(item.numberOfPage)} className={item.className}>{item.numberOfPage}</p>
        })}
        {isLastPage ? "" : <img onClick={nextFunction} src={NextIcon} alt="next-icon"/>}
    </div>

    function generateNumberOfPagesToDisplay(): numberOfPageItem[] {

        return isLastPage ? [{
            numberOfPage: currentPage,
            className: "activePageNumber"
        }] : Array.from({length: numberOfPageToDisplay}, (_, i) => ({
            numberOfPage: currentPage + i,
            className: (currentPage + i) === currentPage ? "activePageNumber" : "inactivePageNumber"
        }));
    }
}