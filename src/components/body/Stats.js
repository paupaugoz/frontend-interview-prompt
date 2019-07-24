import React, { Component } from 'react';
import './body.css';
import axios from 'axios'

export default class DashStats extends Component {
  state = {
    stats: [],
    isLoading: true,
    errors: null
  };


  //Getting from API, but not displaying data
  getStats() {
    axios
      .get('http://www.mocky.io/v2/5d018fbd3100005400ab2968')
      .then(res =>
        res.data.Totals.map(prop => ({
          newFeedbacks: `${prop.newFeedbacks}`,
          totalProfit: `${prop.totalProfit}`,
          newOrders: `${prop.newOrders}`,
          brandPopularity: `${prop.BrandPopularity}`
        }))
      )
      .then(stats => {
        this.setState({
          stats,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getStats();
  }
            
 render() {
    const { isLoading, stats } = this.state;

  return (
    <div className="stats-container">

         <div className="totals-wrapper">
       
         <h2 className="totals">Totals</h2>
         <h2 className="dash-stat">Last Week</h2>
         
         </div>

         <div className="stats-wrapper">
         
           <div className="data-wrapper">
        {/*Test API Data
               {!isLoading ? (
            stats.map(prop => {
              const { newFeedbacks, totalProfit, newOrders, brandPopularity } = prop;
              return (
                <div key={prop}>
                  <p>{newFeedbacks}</p>
                   <p>{newOrders}</p>
                    <p>{totalProfit}</p>
                  
                  <p>{brandPopularity}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}   
        */}
           <h2 className="totals-data">597</h2>

           <h2 className="dash-stat">New Feedbacks</h2>
           </div>
           <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">16.6M$</h2>
           <h2 className="dash-stat">Total Profit</h2>
           </div>
            <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">7.5K</h2>
           <h2 className="dash-stat">New Orders</h2>
           </div>
           <span className="line"/>
          <div className="data-wrapper">
           <h2 className="totals-data">+48%</h2>
           <h2 className="dash-stat">Brand Popularity</h2>
           </div>
         </div>
                
       </div>
    );
      }
   }

