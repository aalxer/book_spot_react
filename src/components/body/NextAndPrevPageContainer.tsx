import NextIcon from '../../images/next-icon-thin.png'
import PrevIcon from '../../images/prev-icon-thin.png'
import './NextAndPrevPageContainer.css'

interface nextAndPrevFunctions {
    currentPage: number;

    nextFunction(): void;

    prevFunction(): void;
}

export default function NextAndPrevPageContainer({currentPage, nextFunction, prevFunction}: nextAndPrevFunctions) {
    return <div className="nextAndPrevContentCotaniner">
        <img onClick={prevFunction} src={PrevIcon} alt="previous-icon"/>
        <p className="inactivePageNumber">{currentPage - 1}</p>
        <p className="activePageNumber">{currentPage}</p>
        <p className="inactivePageNumber">{currentPage + 1}</p>
        <p className="inactivePageNumber">{currentPage + 2}</p>
        <p className="inactivePageNumber">{currentPage + 3}</p>
        <p className="inactivePageNumber">{currentPage + 4}</p>
        <img onClick={nextFunction} src={NextIcon} alt="next-icon"/>
    </div>
}