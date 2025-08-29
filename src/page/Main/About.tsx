import './About.scss';
import worker from "../../utils/workers.json";

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
                    <h2 className="blog-title">Recent Blog <br/> Posts <span>Explore</span></h2>
                    <button className="blog-button button">Read All News</button>
                </div>
                <ul className="blog-list">
                    {

                    }
                </ul>
            </section>
            <section className="courses"></section>

        </>
    );
};

export default About;