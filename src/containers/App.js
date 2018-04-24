import React, { Component } from 'react';
import '../css/App.css';
import ClickBurst from '../components/ClickBurst';
import mojs from 'mo-js';
import '../css/common.css';

class App extends Component {
  
  

  addBurst = (color) => () => {
		const burst = new mojs.Burst({
	
			radius:   { 0: 100 },
			count:    5,
			children: {
				shape:        'circle',
				radius:       20,
				// fill:       [ 'deeppink', 'cyan', 'yellow' ],
				fill:       [color],
				strokeWidth:  5,
				duration:     2000
			}
		});
		const x = Math.floor((Math.random() - 0.5) * window.innerWidth * 0.7);
		const y = Math.floor((Math.random() - 0.5) * window.innerHeight * 0.7);
		burst
			.tune({x,  y})
			.setSpeed(2)
			.replay();
	}
	
	renderBtn = (item) => {
		return (
			<ClickBurst>
				<button onClick={this.addBurst(item.color)}>{item.title}</button>
			</ClickBurst>
		)
	}

  render() {
		const items = [
			{
				color: 'deeppink',
				title: 'lala'
			},
			{
				color: 'cyan',
				title: 'wooow'
			},
			{
				color: 'yellow',
				title: 'woohoo'
			}
		];

    return (
      <div className="App col-flex-container">
			  <div className="App-header">
				  <header>
				  	<h1 className="App-title">Deisgn music demo</h1>
				  </header>
          {/* <RaisedButton label="start" primary onClick={this.addCircle} style={{margin: 20}}/> */}
					{items.map(this.renderBtn)}
				</div>
		    
      </div>
    );
  }
}

export default App;
