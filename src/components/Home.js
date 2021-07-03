import React from 'react';
import Cards from './Cards'
import Market from './Market'
import WelcomeUser from './WelcomeUser'

export class Home extends React.Component {

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
