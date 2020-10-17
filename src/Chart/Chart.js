import React from 'react';
import {Pie} from "react-chartjs-2";
import axios from 'axios';

export default class PersonalBudget extends React.Component {
dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#ff0000',
                '#ff00ff',
                '#00ff00',
                '#0000ff',
                '#00ccff'
            ]
        }
    ],
    labels: []
  }


  getBudget = async() => {
    const res = await axios.get('http://localhost:3001/budget');
     
        for (var i = 0; i < res.data.myBudget.length; i++) {
            this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            this.dataSource.labels[i] = res.data.myBudget[i].title;
        }
    return this.dataSource;
}

componentDidMount(){
    if (!this.dataSource.data) {
      (async () => {
          this.setState({ data: await this.getBudget() });
      })();
    }
  }

  render() {
    return (
      <div>
          {this.dataSource.datasets[0].data.length===0 ? (
              <div>Loading Data</div>
          ):(
          <Pie
          data={{labels: this.dataSource.labels,
        datasets: this.dataSource.datasets}}
        
          />
          )}
      </div>
    )
  }
}
