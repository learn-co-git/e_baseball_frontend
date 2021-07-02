import React from 'react';
import { useDispatch, connect } from 'react-redux'
import { fetchCollection, clearCollection } from '../reducers/card'
import Cards from './Cards'
import { LogOut } from './Logout'
import Market from './Market'

export class Home extends React.Component {

  render(){
    return (
      <div>
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
