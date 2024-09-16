import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="page">
            <aside id="aside">
                <p>
                    Where Purim Dreams Come Alive<br />
                    <br />
                {/*     {showMore ? (
                        <>
                            Step into a world of enchantment with Unmasked, your ultimate destination for the most delightful Purim costumes for kids!
                            At Unmasked, we believe in turning every Purim celebration into a magical experience for your little ones.
                            Our carefully curated collection features an array of vibrant and imaginative costumes that will transport your child to their favorite realms of fantasy. From brave superheroes to graceful princesses,
                            Unmasked offers a kaleidoscope of choices to make this Purim truly special.
                            Immerse your children in the joy of creativity as they transform into their favorite characters with our high-quality costumes, designed for comfort and durability. At Unmasked, we understand the importance of every detail, ensuring that each costume captures the essence of the character while providing a comfortable and enjoyable wearing experience.
                            Make this Purim unforgettable with Unmasked, where imagination meets quality.
                            Shop now and watch your little ones radiate joy and excitement as they embark on their Purim adventures.
                            Unleash the magic, embrace the fun – because at Unmasked, Purim dreams come alive!
                        </>
                    ) : (
                        <>
                            Step into a world of enchantment with Unmasked, your ultimate destination for the most delightful Purim costumes for kids!
                            At Unmasked, we believe in turning every Purim celebration into a magical experience for your little ones.
                            Our carefully curated collection features an array of vibrant and imaginative costumes that will transport your child to their favorite realms of fantasy.
                        </>
                    )}
                </p>
                {!showMore && (
                    <button className="btn btn-primary" onClick={toggleShowMore}>
                        Show More
                    </button>
                )}
                {showMore && (
                    <button className="btn btn-primary" onClick={toggleShowMore}>
                        Show Less
                    </button> 
                )}*/}
                </p>
            </aside>
            <main id="open">
                <div className="box">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h1>Unleash the Magic</h1>
                                {/* <img src="./images/clown.gif" alt="..." /> */}
                            </div>
                            <div className="carousel-item">
                                <h1>Embrace the fun!</h1>
                                {/* <img src="./images/a.gif" style={{ width: "fit-content", height: "fit-content" }} alt="..." /> */}
                            </div>
                            <div className="carousel-item">
                                {/* <img src="./images/clown1.gif" alt="..." /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <figure id="figure">
                <div className="homeImg"><img className="homeImg1" src="./images/a.jpg" alt="..." /></div>
                <div className="homeImg"><img className="homeImg1" src="./images/penguin.jpg" alt="..." /></div>
                <div className="homeImg"><img className="homeImg1" src="./images/monkey.jpg" alt="..." /></div>
            </figure>
        </div>
    );
}

export default Home;
