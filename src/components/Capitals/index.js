import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }
  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachObject => eachObject.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div>
        <h1>Countries and Capitals</h1>
        <select
          name="countries"
          onChange={this.onChangeCapital}
          value={activeCapitalId}
        >
          {countryAndCapitalsList.map(eachObject => (
            <option value={eachObject.id} key={eachObject.id}>
              {eachObject.capitalDisplayText}
            </option>
          ))}
        </select>
        <p> is capital of which country?</p>
        <br />
        <p>{country}</p>
      </div>
    )
  }
}
export default Capitals
