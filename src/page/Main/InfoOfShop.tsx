import './InfoOfShop.scss';
import supplies from "../../utils/supplies.json"
import menu from "../../utils/menu.json"

const InfoOfShop = () => {
    return (
        <>
            <section className="supplies">
                <h2 className="supplies-title title-big">Our Trusted Supplies</h2>
                <ul className="supplies-list">
                    {
                        supplies.map((supl, index) =>
                            <li className="supplies-item" key={index}>
                                <img className="supplies-item__img" src={supl.logo} alt={supl.compony} loading={"lazy"}/>
                            </li>
                        )
                    }
                </ul>
            </section>
            <section className="menu">
                <h2 className="menu-title title-big">Our Coffee :</h2>
                <ul className="menu-list">
                    {
                        menu.map((item, index) =>
                        <li className={"menu-item"} key={index}>
                            <h4 className="menu-item__title">{item.title}</h4>
                            <p className="menu-item__cost">{item.cost}</p>
                            <p className="menu-item__subtitle">{item.subtitle}</p>
                        </li>
                        )
                    }
                </ul>
                <div className="menu-image-wrapper" data-image="Our Coffee">
                    <img className="menu-image" src="/images/image-in-menu.jpg" alt="women with coffee" loading="lazy"/>
                </div>
            </section>
            {/*todo*/}
            <section className="follow-us"></section>

        </>
    );
};

export default InfoOfShop;