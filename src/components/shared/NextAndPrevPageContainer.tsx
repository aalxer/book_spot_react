import NextIcon from '../../assets/icons/next-icon-thin.png'
import DisabledNextIcon from '../../assets/icons/next-icon-gray.png'
import PrevIcon from '../../assets/icons/prev-icon-thin.png'
import DisabledPrevIcon from '../../assets/icons/prev-icon-gray.png'
import LastPageIcon from "../../assets/icons/lastPage-icon.png"
import DisabledLastPageIcon from "../../assets/icons/lastPage-icon-gray.png"
import FirstPageIcon from "../../assets/icons/firstPage-icon.png"
import DisabledFirstPageIcon from "../../assets/icons/firstPage-icon-gray.png"
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

        <img onClick={goToFirstPage} src={currentPage > 1 ? FirstPageIcon : DisabledFirstPageIcon} alt="first-page-icon"/>
        <img onClick={prevFunction} src={currentPage > 1 ? PrevIcon : DisabledPrevIcon} alt="previous-icon"/>

        {
            generateNumberOfPagesToDisplay().map((item) => {
                return <p key={item.numberOfPage} onClick={() => goToPage(item.numberOfPage)}
                          className={item.className}>{item.numberOfPage}</p>
            })
        }

        <img onClick={nextFunction} src={currentPage === lastPage ? DisabledNextIcon : NextIcon} alt="next-icon"/>
        <img onClick={gotToLastPage} src={currentPage === lastPage ? DisabledLastPageIcon : LastPageIcon} alt="last-page-icon"/>
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