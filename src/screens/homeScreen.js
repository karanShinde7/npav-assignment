import React from 'react';
import { cricScoreService } from '../services/criScroreServices'
import ScoreView from '../components/scoreViewComponent';
import LabelComponent from '../components/lableComponent';
import testData from '../data/data';
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      testData: testData,
      serverData: [],
      site: 'test',
    }
    this.onSiteChanged = this.onSiteChangedFunction.bind(this)
  }

  componentDidMount() {
    cricScoreService.cricScoreServiceApi().then((cricScoreData) => {
      this.setState({ serverData: cricScoreData.data })
    }).catch((error) => {
      console.log(error)
    })
  }

  onSiteChangedFunction(e) {
    this.setState({ site: e.target.value });
  }

  render() {
    return (
      <div className="home-container">
        <div className="radio-div">
          <input type="radio" name="site" value="test" checked={this.state.site === 'test'} onChange={this.onSiteChanged} />
          <LabelComponent>Test Data</LabelComponent>
          <input type="radio" name="site" value="server" onChange={this.onSiteChanged} />
          <LabelComponent>Server Data</LabelComponent>
        </div>
        <ScoreView selected={this.state.site} testData={this.state.testData} serverData={this.state.serverData} />
        <ScoreView selected={this.state.site} testData={this.state.testData} serverData={this.state.serverData} />
      </div>
    )
  }
}