import Header from '../Components/Header'
import Footer from '../Components/Footer'

import TableExampleStructured from '../Components/TableExampleStructured';

import './css/costCalculations.css';

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