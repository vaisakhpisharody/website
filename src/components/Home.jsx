import "../styles/Home.css";
import { CodingHobbies } from "./CodingHobbies";
import backgroundImage from "../assets/background-image.jpg";

export const Home = () => {
    return (
        <div className="home">
            <div className="home__img-background">
                <img src={backgroundImage} alt="Me" />
            </div>

            <div className="home__description">
                <CodingHobbies />
            </div>
        </div>
    )
}