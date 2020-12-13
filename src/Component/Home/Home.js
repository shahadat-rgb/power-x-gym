const { default: AboutUs } = require("./AboutUs/AboutUs")
const { default: ChooseUs } = require("./ChooseUs/ChooseUs")
const { default: MainHeader } = require("./MainHeader/MainHeader")
const { default: Service } = require("./Service/Service")
const { default: Training } = require("./Training/Training")

const Home = () => {
    return (
        <div>
         <MainHeader></MainHeader>
         <Service></Service>
         <AboutUs></AboutUs>
         <Training></Training>
         <ChooseUs></ChooseUs>
         
        </div>
    );
};

export default Home;