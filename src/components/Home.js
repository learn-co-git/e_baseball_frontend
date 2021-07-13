import React from 'react';
import Cards from './Cards'
import Market from './Market'
import WelcomeUser from './WelcomeUser'
import SellCard from './SellCard'

export class Home extends React.Component {

  sellCard() {
    return <SellCard/>
  }

  render(){
    return (
      <div>
        <WelcomeUser/>
        <div>
          <section>
            <h2>Market Place</h2>
            <Market/>
            </section>
          <section>
            <h2>Your Store</h2>
            <button className="button" type="button" onClick={SellCard}>SELL</button>
          <Cards/>
          </section>
        </div>
          <footer>
          </footer>
        </div>
      )
    }
  }



export default Home;
