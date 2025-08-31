import './Footer.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <img className="footer-logo" src="/public/images/logo-footer.png" alt="logo " loading={"lazy"}/>
                <nav className="footer-menu">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <h3 className="footer-item__title">Early Birds</h3>
                            <address className="under-line"> Weteringstraat 48,1017 SP</address>
                            <address className="under-line" >Amsterdam</address>
                            <a  className="under-line" href="tel::020-7718364">Tel : 020-7718364</a>
                        </li>
                        <li className="footer-item">
                            <ul className="footer-item__list">
                                <li><a className="under-line" href="#">My Account</a></li>
                                <li><a  className="under-line"  href="#">Checkout</a></li>
                                <li><a  className="under-line" href="#">Cart</a></li>
                                <li><a  className="under-line" href="#">Shop</a></li>
                            </ul>
                        </li>
                        <li className="footer-item">
                            <ul className="footer-item__list">
                                <li><a  className="under-line" href="#">Facebook</a></li>
                                <li><a  className="under-line" href="#">Instagram</a></li>
                                <li><a  className="under-line" href="#">Twitter</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

        </footer>
    );
};

export default Footer;