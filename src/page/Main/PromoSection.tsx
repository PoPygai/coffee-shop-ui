import "./PromoSection.scss";
import products from "../../utils/products.json";
import {useRef, useState} from "react";
import {COFFEE_QUOTES} from "../../utils/constant.ts";
const PromoSection = () => {
    const productsArray =products.products.slice(0,2)
    const [indexQuotes, setIndexQuotes] = useState(0);
    const refQuotes = useRef<HTMLUListElement | null>(null);


    return (
        <>
            <section className="enjoy">
                <img className="enjoy-image" src="/public/images/bg.png" alt="images with two caps" loading="lazy"/>
                <div className="enjoy-body">
                    <h2 className="enjoy-title" data-title={"with love!"}>
                        Enjoy <br/>
                        Life Sip <br/>
                        By Sip
                    </h2>
                </div>
            </section>
            <section className="sweetness">
                <div className="sweetness-info">
                    <h3 className="sweetness-title">Our blends deliver on the promise of <br/> balance and
                        consistency,<span>roasted to</span> <br/> maximize sweetness.</h3>
                    {/*todo*/}
                    <p className="sweetness-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut <br/> elit tellus, luctus nec ullamcorper.</p>
                    <button className="sweetness-button more-info">View More</button>
                </div>
                <ul className="sweetness-list product-list">
                    {
                        productsArray.map((item, index) =>
                            <li key={index} className="product-item">
                                <img className="product-item-img" src={item.img} alt="photo of product"/>
                                <h4 className="product-item-title">{item.name}</h4>
                                <p className="product-item-cost">{item.cost}</p>
                            </li>
                        )
                    }
                </ul>
            </section>
            <section className="alert">
                <h2 className="alert-title">More Than Just A Coffee <br/>
                    Shop</h2>
            </section>
            <section className="quotes">
                <div className="quotes-body">
                    <h3 className="quotes-text">{COFFEE_QUOTES[indexQuotes].text}</h3>
                    <p className="quotes-author">{COFFEE_QUOTES[indexQuotes].author}</p>
                    <ul className="quotes-list" ref={refQuotes}>
                        {COFFEE_QUOTES.map((_, i) => (
                            <li key={i} className="quotes-item">
                            <button
                                    className={`quotes-button ${indexQuotes === i ? "is-current" : ""}`}
                                    type="button"
                                    onClick={() => setIndexQuotes(i)}
                                ></button>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className="quotes-image" src="/public/images/cap-of-coffee.png" alt="images with cap of coffee"

                     loading="lazy"/>
            </section>
        </>
    );
};

export default PromoSection;