import Hero from "./Hero.jsx";
import ImageSlider from "./ImageSlider.jsx";
import UsersRole from "./UsersRole.jsx";
import StaticNav from "./StaticNav.jsx";
import Pay from "./Payment.jsx";
import Footer from "./Footer.jsx";

function Home() {
	return (
		<>
			<StaticNav />
			<ImageSlider />
			<Hero />
			<UsersRole />
			<Pay />
			<Footer />
		</>
	);
}

export default Home;
