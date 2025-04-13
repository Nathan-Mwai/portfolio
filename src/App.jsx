import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowcaseSection/>
            {/*<LogoSection/>*/}
            <FeatureCards/>
            <Experience/>
            <TechStack/>
        </>
    )
}

export default App