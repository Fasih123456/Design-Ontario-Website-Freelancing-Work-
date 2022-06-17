import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div class="ui inverted vertical footer segment">
        <div class="ui container">
          <div class="ui stackable inverted divided equal height stackable grid">
            <div class="three wide column">
              <h4 class="ui inverted header footer-heading">About</h4>
              <div class="ui inverted link list">
                <Link to="/" className='no-link-style'> <div href="#" class="item footer-content">Home</div></Link>
                <Link to="/Work" className='no-link-style'><div href="#" class="item footer-content">Work</div></Link>
                <Link to="/Cost" className='no-link-style'><div href="#" class="item footer-content">Contact Us</div></Link>
                <Link to="/Contact" className='no-link-style'><div href="#" class="item footer-content">Cost Calculations</div></Link>
              </div>
            </div>
            <div class="seven wide column">
              <h4 class="ui inverted header footer-heading">Other</h4>
              <p>This Website was designed by <a target='_blank' href='https://www.fiverr.com/fasih12?up_rollout=true'>Fasih Ul Islam</a></p>
              <p>© CopyRight 2022</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;