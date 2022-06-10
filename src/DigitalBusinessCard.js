import Image from "./components/Image"
import Info from "./components/Info"
import About from "./components/About"
import Footer from "./components/Footer"

const DigitalBusinessCard = () => {
    return (
        <div className="main-content">
            <Image />
            <div className="info-div">
                <Info />
                <About />
            </div>
            <Footer />
        </div>
    )
}
export default DigitalBusinessCard