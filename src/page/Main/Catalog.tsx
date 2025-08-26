import "./Catalog.scss";
import {ASIDE_LIST} from "../../utils/constant.ts";
import products from "../../utils/products.json";
import {useEffect, useState} from "react";

const Catalog = () => {
    const productsArray = products.products;

    const visibleCount = 4; // сколько карточек показываем одновременно
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlider = () => {
        setCurrentIndex((prev) =>
            prev + visibleCount >= productsArray.length ? 0 : prev + 1
        );
    };

    const backSlider = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? productsArray.length -1  : prev - 1
        );
    };
    useEffect(() => {
        console.log(currentIndex)
        console.log(visibleProducts)
    },[currentIndex])

    const visibleProducts = productsArray.slice(
        currentIndex,
        currentIndex + visibleCount
    );


    if (visibleProducts.length < visibleCount) {
        visibleProducts.push(
            ...productsArray.slice(0, visibleCount - visibleProducts.length)
        );
    }


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
                    <img src="/public/images/main-home.jpg.png" alt="coffee" className="contact-body-image"/>
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
                <h2 className="catalog-title">The Coffee that's right for you</h2>

                <div className="product-slider">
                    <ul className="catalog-list product-list">
                        {visibleProducts.map((item, index) => (
                            <li key={index} className="product-item">
                                <img className="product-item-img" src={item.img} alt={item.name} />
                                <h4 className="product-item-title">{item.name}</h4>
                                <p className="product-item-cost">{item.cost}</p>
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
            <section className="possibilities"></section>


        </>
    );
};

export default Catalog;