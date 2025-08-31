import './About.scss';
import worker from "../../utils/workers.json";
import blogCarts from "../../utils/blogCarts.json";


const About = () => {

    return (
        <>
            <section className="team">
                <h2 className="team-title title-big">Our Awesome Team</h2>
                <ul className="team-list list">
                    {worker.map((item, index) => (
                        <li key={index} className="team-item list-item">
                            <img className="list-item-img" src={item.img} alt={item.name} loading={"lazy"}/>
                            <h4 className="list-item-title">{item.name}</h4>
                            <p className="list-item-subtitle">{item.status}</p>
                        </li>
                    ))}
                </ul>

            </section>
            <section className="blog">
                <div className="blog-aside">
                    <h2 className="blog-title title-big">Recent Blog <br/> Posts <span>Explore</span></h2>
                    <button className="blog-button button">Read All News</button>
                </div>
                <ul className="blog-list">
                    {
                        blogCarts.map((item, index) =>
                            <li className="blog-item" key={index}>
                                <img src={item.img} alt="preview" className="blog-item__img" loading={"lazy"}/>
                                <div className="blog-item-content">
                                    <p className="blog-date "><time className="blog-date under-line" dateTime={new Date(item.date).toISOString().split("T")[0]}>
                                        {item.date}
                                    </time>
                                    </p>
                                    <h4 className="blog-item-title">{item.title}</h4>
                                    <a href="#" target={"_blank"} className="blog-item-link more-info">Read More</a>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
            <section className="courses">
                <div className="courses-container">
                    <img src="/public/images/barists.png" alt="two barists" className="courses-img" loading={"lazy"}/>
                    <div className="courses-body">
                        <h3 className="courses-title">Barista Schools & Careers</h3>
                        <p className="courses-description">  We host courses covering everything from simple home brewing techniques to advanced latte art to allow you to learn the essential life skill of how to make truly great coffee.</p>
                        <button className="courses-button button">View More</button>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;