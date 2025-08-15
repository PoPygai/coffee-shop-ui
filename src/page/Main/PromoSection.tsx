import "./PromoSection.scss";
import products from "../../utils/products.json";
import {useState} from "react";
const PromoSection = () => {
    const productsArray =products.products.slice(0,2)
    const [indexQuotes, setIndexQuotes] = useState(0);
    const handleClick = (index:number)=>{
        //todo event?
        setIndexQuotes(index)
    }


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
            <section className="product">
                <div className="product-info">
                    <h3 className="product-title">Our blends deliver on the promise of <br/> balance and consistency,<span>roasted to</span> <br/> maximize sweetness.</h3>
                    {/*todo*/}
                    <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/> elit tellus, luctus nec ullamcorper.</p>
                    <button className="product-button more-info">View More</button>
                </div>
                <div className="product-catalog">
                    <ul className="catalog-list">
                        {
                            productsArray.map((item,index)=>
                                <li key={index} className="catalog-item">
                                    <img className="catalog-item-img" src={item.img} alt="photo of product"/>
                                    <h4 className="catalog-item-title">{item.name}</h4>
                                    <p className="catalog-item-cost">{item.cost}</p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
            <section className="alert">
                <h2 className="alert-title">More Than Just A Coffee <br/>
                Shop</h2>
            </section>
            <section className="quotes">
                <div className="quotes-body">
                    <h3 className="quotes-text">"Another reason people just can't keep away from their local coffee shop is the quality of coffee that's on offer. "</h3>
                    <p className="quotes-owners">Henry Monro</p>
                    <ul className="quotes-list">
                        <li className="quotes-item">
                            <button
                                className="quotes-button"
                                type="button"
                                onClick={()=>handleClick(0)}
                            ></button>
                        </li>
                        <li className="quotes-item">
                            <button
                                className="quotes-button "
                                type="button"
                                onClick={()=>handleClick(1)}
                            ></button>
                        </li>
                        <li className="quotes-item">
                            <button
                                className="quotes-button is-current"
                                type="button"
                                onClick={()=>handleClick(2)}
                            ></button>
                        </li>
                    </ul>
                </div>
                <img className="quotes-image" src="/public/images/cap-of-coffee.png" alt="images with cap of coffee"

                     loading="lazy"/>
            </section>
        </>
    );
};

export default PromoSection;