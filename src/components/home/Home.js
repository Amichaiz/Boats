import './Home.css';
import {BsSearch,BsShieldShaded} from 'react-icons/bs'
import Search from './Search'
import {BiTargetLock,BiMessageRounded} from 'react-icons/bi'
  
const Home = () => {

    return (
        <div className='center'>
            <div className='papa'>
                <div className='size'>
                    <div className='container'>
                        <h2>Search. Compare. Buy</h2>
                        <p className='border-bottom'><strong>We make buying a boat a breaze with our powerful and sleak interface, easy-to-use comparison charts and informative listings.</strong></p>
                        <p><strong>Buying a boat?</strong> Let us help you get started</p>
                        <div><input placeholder='What do you want to use your boat for?' className='input' /><button type="submit" className='button'><BsSearch /></button></div>
                    </div>
                    <Search />     
                </div>
            </div>
            {/*<div className='linehight'>
            <h2 className='margin1'>EXPLORE THE BOAT PRIME MARKETPLACE</h2>
                <h4>Learn the how-tos of buying and selling your boat!</h4>
                <div className='box-video'>
                    <div className='video'></div>
                    <div><p className='smaller '>BUY EASIER & SELL QUICKER</p><p>it's so easy to buy and sell on Boat Prime! Watch Our short video to learn how to utilize all of Boat Prime's incredinle features!</p></div>
                </div>
            </div>*/}
            <div className='component3'>
                <div className='contain3'>
                <h3>WHY USE BOAT PRIME?</h3>
                <p>Finding the right boat to buy can be hard work. Finding the perfect boat that's actually in your area can be even harder. Hiring a dealer comes with a hefty price tag, but comparing boat prices and trying to understand the
                     differences between each quote is time consuming and we understand that time is money. Boat Prime helps you find a boat in your area, compare different quotes and provides you important information to help you make an educated decision.
                </p>
                <div className='flex'>
                    <div className='gap'><BiTargetLock className='icon-size'/><h2>ON-TARGET</h2><h5>Easy-to-use comparison charts so you can find the right boat for the right price.</h5></div>
                    <div className='gap'><BiMessageRounded className='icon-size'/><h2>DEDICATED SUPPORT</h2><h5>Need help? Our dedicated support team is waiting to help you! Quick response time quaranteed!</h5></div> 
                    <div className='gap'><BsShieldShaded className='icon-size'/><h2>RISK-FREE</h2><h5> Create an account, save boats to favorites & browse boats for sale-with zero commitment!</h5></div>
                </div>
                </div>
            </div>
            {/*<div>
                <h2>FETURED BOATS FOR SALE</h2>
                <p>Check out these hot listings!</p>
            </div>
            <div></div>*/}
        </div>
    );
}

export default Home;