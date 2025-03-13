import React from "react";
// import bg from "../assets/bg.jpg"
import classes from "./page.module.css";
import header_img from "../assets/header.png";
import PostList from "../components/common/Post/PostList";
import Button from "../components/common/Button/Button";
import Feature_img from "../assets/feature.png";
import FoodList from "../components/common/Food/FooList";
import Dining_img from '../assets/dining.png';
import blog_img from '../assets/blog.png';
import RestaurantList from "../components/common/Restaurant/RestaurantList";

const HomePage = () => {
    return (
        <div className={`grid wide`}>
            <div className={`${classes.header}`}>

                <div className={`${classes.header_content}`}>
                    <h1>
                        Just Spicing Up Your Journey with Local Delights.
                    </h1>
                    <p>
                        Our website is your ultimate guide to exploring traditional dishes, hidden street food gems and authentic recipes from across the region. Whether you’re a food lover or a traveler, we bring you close to the heart of our culture through food.
                    </p>
                    <Button effect={true}>Let’s Explore</Button>
                </div>
                <img alt='img' className={classes.header_img} src={header_img} />
            </div>

            <div className={classes.home_feature}>
                <img src={Feature_img} alt="feature" />
                <div className={classes.feature_content}>
                    <h1>
                        Featured Local Dishes
                    </h1>
                    <p>
                        Explore the signature flavors of out region. From savior street food to exquisite traditional dishes.
                    </p>
                    <Button>See more</Button>
                </div>
            </div>

            <div className={classes.container}>
                <FoodList />
                <div className={classes.dining}>
                    <div className={classes.dining_content}>
                        <h1>
                            Best Dining Places
                        </h1>
                        <p>
                            Find the best spots to enjoy authentic local food. Whether you prefer cozy family-run eateries, bustling steel food, or removed restaurants, we’ve got you covered. Explore our handpicked list of top dining spots and never miss a great food experience!
                        </p>
                        <Button>Explore now</Button>
                    </div>
                    <img src={Dining_img} alt="dining" />
                </div>
                <RestaurantList />
                <div className={classes.blog}>
                    <img src={blog_img} alt="blog" />
                    <div className={classes.blog_content}>
                        <h1>
                            Blog & Food Stories
                        </h1>
                        <p>Beyond taste  discover the culture behind every dish!Food is more than just a meal, it’s a reflection of history, culture and traditions. Read our latest blog posts featuring food stories, seasonal recommendations and festival highlights.</p>

                    </div>
                </div>
                <PostList />
            </div>
        </div>
    );

};


export default HomePage;         