import NextIcon from '../../assets/icons/next-icon-thin.png'
import PrevIcon from '../../assets/icons/prev-icon-thin.png'
import LastPageIcon from "../../assets/icons/lastPage-icon.png"
import FirstPageIcon from "../../assets/icons/firstPage-icon.png"
import '../../styles/NextAndPrevPageContainer.css'
import {nextAndPrevContext} from "../../types/NextAndPrevContext";

interface numberOfPageItem {
    numberOfPage: number;
    className: string;
}

export default function NextAndPrevPageContainer({
                                                     currentPage,
                                                     lastPage,
                                                     numberOfPageToDisplay,
                                                     nextFunction,
                                                     prevFunction,
                                                     goToPage,
                                                     gotToLastPage,
                                                     goToFirstPage

                                                 }: nextAndPrevContext) {
    return <div className="nextAndPrevContentCotaniner">
        {currentPage > 1 ? <img onClick={goToFirstPage} src={FirstPageIcon} alt="first-page-icon"/> : ""}
        <img onClick={prevFunction} src={PrevIcon} alt="previous-icon"/>
        {generateNumberOfPagesToDisplay().map((item) => {
            return <p key={item.numberOfPage} onClick={() => goToPage(item.numberOfPage)}
                      className={item.className}>{item.numberOfPage}</p>
        })}
        {currentPage === lastPage ? "" :
            <>
                <img onClick={nextFunction} src={NextIcon} alt="next-icon"/>
                <img onClick={gotToLastPage} src={LastPageIcon} alt="last-page-icon"/>
            </>
        }
    </div>

    function generateNumberOfPagesToDisplay(): numberOfPageItem[] {

        return currentPage === lastPage ? [{
            numberOfPage: currentPage,
            className: "activePageNumber"
        }] : Array.from({length: numberOfPageToDisplay}, (_, i) => ({
            numberOfPage: currentPage + i,
            className: (currentPage + i) === currentPage ? "activePageNumber" : "inactivePageNumber"
        }));
    }
}