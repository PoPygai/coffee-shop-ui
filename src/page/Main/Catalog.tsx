import "./Catalog.scss";
import {ASIDE_LIST} from "../../utils/constant.ts";
import products from "../../utils/products.json";
import text from "../../utils/text.json";
import { useEffect, useState} from "react";

const Catalog = () => {


    const [visibleCount,setVisibleCount] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemValues =  text["menu-list"];

    console.log(itemValues);
    const nextSlider = () => {
        setCurrentIndex((prev) =>
            prev + visibleCount >= products.length ? 0 : prev + 1
        );
    };
    const backSlider = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? products.length -1  : prev - 1
        );
    };
    const visibleProducts = products.slice(
        currentIndex,
        currentIndex + visibleCount
    );
    if (visibleProducts.length < visibleCount) {
        visibleProducts.push(
            ...products.slice(0, visibleCount - visibleProducts.length)
        );
    }

    useEffect(() => {
        if(screen.width < 450) setVisibleCount(2);
    }, []);


    return (
        <>
            <section className="contact">
                <ul className="contact-aside-list">
                    {
                        ASIDE_LIST.map((item, index) => {
                            return <li key={index} className="contact-aside-item">
                                {item}
                            </li>
                        })
                    }
                </ul>
                <div className="contact-body">
                    <img src="/coffee-shop-ui/images/main-home.jpg.png" alt="coffee" className="contact-body-image"/>
                    <div className="contact-body-info">
                        <h4 className="contact-title">Amsterdam Centre Coffee</h4>

                        <div className="contact-body-info__header">
                            <address>Weteringstraat 48,1017,Amsterdam</address>
                            <a className="contact-link" href="tel:+31207718364">Tel:020-7718364</a>
                            <a className="contact-link"
                               href="mailto:earlybirds@info.com">Email:earlybirds@info.com</a>
                        </div>

                        <ul className="contact-body-info__footer">
                            <li className="info-item">
                                Mon-Fri..........
                                <time dateTime="6:45/15:00">6.45am-3.00pm</time>
                            </li>
                            <li className="info-item">
                                Sat-Sun.........
                                <time dateTime="8:30/16:00">8.30am-4.00pm</time>
                            </li>
                        </ul>

                        <button className="contact-body-info-button button" type="button">Contact Us</button>
                    </div>
                </div>
            </section>
            <section className="catalog">
                <h2 className="catalog-title title-big">The Coffee that's right for you</h2>

                <div className="product-slider">
                    <ul className="catalog-list list">
                        {visibleProducts.map((item, index) => (
                            <li key={index} className="list-item">
                                <img className="list-item-img" src={item.img} alt={item.name} loading={"lazy"}/>
                                <h4 className="list-item-title">{item.name}</h4>
                                <p className="list-item-subtitle">{item.cost}</p>
                                {
                                    item.status !== "" ? <h4 className={`${item.status}-product`}>{item.status}</h4> : null
                                }
                            </li>
                        ))}
                    </ul>

                    <button className="catalog-btn back" onClick={backSlider}>
                        ◀
                    </button>
                    <button className="catalog-btn next" onClick={nextSlider}>
                        ▶
                    </button>
                </div>
            </section>
            <section className="services">
                <div className="services-aside">
                    <h2 className="services-title ">Swing by our place <br/> we <span >also have food</span> </h2>
                    <img className="services-image" src="/coffee-shop-ui/images/buns.png" alt="buns" loading={"lazy"}/>
                </div>
                <ul className="services-skills-list">
                    {
                        itemValues.map((item,i) => {
                            return <li className="skills-item" key={i}>
                                <div className="skills-item-info">
                                    <h4 className="skills-item-title">{item.title}</h4>
                                    <p className={"skills-item-description"}>{item.description}</p>
                                </div>
                                <a href="#" target={"_blank"} className="skills-item-button more-info">view more</a>
                            </li>
                        })
                    }
                </ul>

            </section>
        </>
    );
};

export default Catalog;
