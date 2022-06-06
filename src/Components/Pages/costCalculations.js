import Header from "../Header";
import Footer from '../Footer';

import CardExampleLinkCard from '../CardExampleLinkCard';
import TableExampleStructured from "../TableExampleStructured";

import './costCalculations.css';

const costCalculations = () =>{
    return (
        <div class='active item'>
            <Header title='Know Your Prices' />
            <div id='cost-page-body'>
            <TableExampleStructured />

            </div>
            <Footer />
        </div>
      )
};

export default costCalculations;