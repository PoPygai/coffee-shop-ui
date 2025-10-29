import text from "../../utils/text.json";
// import {useState} from "react";
import "./Header.scss"

const Header = () => {
    // const [carts, setCarts] = useState(0);

    const listInfo =  text["header-nav-list"];
    const listInfoAdditional =  text["header-nav-list-additional"];



    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="nav-list">
                    {
                        listInfo.map((item, index) => (
                            <li key={index} className="list-item">
                                <a className="list-item-link under-line" href="#">{item}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className={"nav-logo"}>
                    <img className="nav-logo__img" src={"/coffee-shop-ui/images/logo-black-1.png.png"} alt={"logo"}
                         width={166} height={38} loading={"lazy"}/>
                </div>

                <ul className="list-additional">
                    {
                        listInfoAdditional.map((item, index) => (
                            <li key={index} className="list-item additional">
                                <a className="list-item-link" href="">{item}{item === "cart" ? `(${0})` : ""}</a>
                            </li>
                        ))
                    }
                </ul>

            </nav>
        </header>
    );
};

export default Header;
