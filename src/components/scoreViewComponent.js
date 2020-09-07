import React from 'react'
import ServerDataComponent from './serverDataComponent';
import { SearchInputComponent } from './searchComponent';

let testData = [];
let serverData = [];
export default class ScoreView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            searchProps: '',
            averageScore: '',
            serverAverageScore: '',
            testScore: '',
            serverScore: '', 
            showProgress : false,
            showServerProgress : false
        }
        this.handleChange = this.handleChangeFunction.bind(this)
    }

    handleChangeFunction(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
        testData = []; serverData = []
        if(value.length > 2){
            testData = this.props.testData.filter((element) => {
                if(element.country == value){
                    this.setState({showProgress : true})
                    return element.country 
                } else {
                    return element.country.startsWith(value)
                }
            })
            serverData = this.props.serverData.filter((element) => {
                if(element[0] == value){
                    this.setState({showServerProgress : true})
                    return element[0]
                } else {
                    return element[0].startsWith(value)
                }
            })
            this.setState({ testScore: this.calculateAvg(testData), 
                serverScore: this.calculateAvg(serverData),
                searchProps: value })
        } else {
            testData = []; serverData = []
            this.setState({ testScore: '', 
                serverScore: '',
                searchProps: '' })
            this.setState({error : 'Type at least three words'})
        }
    }

    calculateAvg(data) {
        let total = 0;
        if (data.length > 0) {
            total = data.reduce((prev, next) => prev + (next.score || next[1]), 0);
            total = Math.floor((total / data.length) * 100) / 100;
        }
        return total;
    }

    render() {
        return (
            <div className="data-container">
                <div className="search-bar-main">
                    <SearchInputComponent type='search' placeholder='Serach country here' name='searchText' value={this.state.searchText} onChangeFunction={this.handleChange} required={true} searchClick={this.searchClickHandle} />
                </div>
                <div className="content-bar-main">
                    {this.props.selected === 'test'
                        ? <ServerDataComponent country={testData.length} countryName={this.state.searchProps} serverAverageScore={this.state.testScore} showProgress={this.state.showProgress}/>
                        : <ServerDataComponent country={serverData.length} countryName={this.state.searchProps} serverAverageScore={this.state.serverScore} showServerProgress={this.state.showServerProgress}/>
                    }
                </div>
            </div>
        )
    }
}