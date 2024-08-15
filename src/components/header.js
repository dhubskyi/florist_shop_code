import { useSelector } from "react-redux";
function Header (props){
    const { itemsQ } = useSelector((state) => state.items);
    return(
        <header>
            <img src="https://cdn.pixabay.com/photo/2023/03/25/21/15/clover-7876940_1280.png" id="logo"/>
            <span>
                <p id="headertitle">Denys' florist mart</p>
                <p id="headersubtitle">best choice for your money</p>
            </span>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png" id="homeimg" onClick={props.changeMainPageHandler}></img>
            <img src="https://cdn.pixabay.com/photo/2015/10/22/16/42/icon-1001596_1280.png" id="shcartimg" onClick={props.changePageHandler}/>
            <span><h2>{itemsQ}</h2><p id="itemsLabel">items</p></span>
        </header>
    )
}

export default Header;