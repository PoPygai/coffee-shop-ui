
import "./PromoSection.scss";

const PromoSection = () => {
    return (
        <>
            <section className={"enjoy"}>
                <img className={"enjoy-image"} src="/public/images/bg.png" alt="images with two caps" loading={"lazy"}/>
                <div className="enjoy-body">
                    <h2 className={"enjoy-title"} data-title={"with love!"}>
                        Enjoy <br/>
                        Life Sip <br/>
                        By Sip
                    </h2>
                </div>
            </section>
            <section className={"products"}></section>
            <section className={"alert"}></section>
            <section className={"quotes"}></section>
        </>
    );
};

export default PromoSection;