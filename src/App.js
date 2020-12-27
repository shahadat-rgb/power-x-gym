import { createContext,useState } from 'react';
import { Route,  BrowserRouter as Router  , Switch } from 'react-router-dom';
import './App.css';
import AllClassDetails from './Component/AllClassDetails/AllClassDetails';
import Checkout from './Component/Checkout/Checkout';
import Footer from './Component/Home/Footer/Footer';
import Home from './Component/Home/Home';
import OurClass from './Component/OurClass/OurClass';
import PaymentMathod from './Component/PaymentMathod/PaymentMathod';
import Pricing from './Component/Pricing/Pricing';

import RegistrationForm from './Component/RegistrationForm/RegistrationForm';

export  const TrainingContext = createContext();

function App() {
  const [training,setTraining] =useState({})
  return (
    <TrainingContext.Provider value={[training,setTraining]}>
 <Router>
         <Switch>
         <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/our-class">
             <OurClass></OurClass>
        </Route>
        <Route path="/allClassDetails/:trainingId">
             <AllClassDetails></AllClassDetails>
        </Route>

        <Route path ='/pricing'>
             <Pricing></Pricing>
        </Route>
        <Route path='/registration-form'>
             <RegistrationForm></RegistrationForm>
        </Route>
       <Route path='/payment'>
            <PaymentMathod></PaymentMathod>
       </Route>
       <Route path='/checkout'>
            <Checkout></Checkout>
       </Route>
     
         </Switch>
         <Footer></Footer>
       </Router>
      </TrainingContext.Provider>
  );
}

export default App;
