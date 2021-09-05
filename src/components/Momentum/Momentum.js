import axios from 'axios'
import React, { Component } from 'react'
import '../../../src/index.css'
import './StyleMomentum.css'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'


class Momentum extends Component {
  constructor (props) {
    super(props)
    this.state = {
       backgroundUrl: '',
       temp: null,
       conditions: null,
       quote: '',
       author: '',
       time: ''

    }
  }

  
   componentDidMount() {
     // gets background pic
    const accessKey = 'atUKd01wrrwoeOkenYTMcW4wKxbUBtDP0L7PB3thtEY'
    const urlPic = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`
     axios.get(urlPic)
      .then(res => {
        this.setState({ backgroundUrl: res.data.urls.regular });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      })

    // gets weather
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Atlantic Beach,Florida&units=imperial&appid=e20a75e27a49a2e8acfee2fcfa0691d1`
    axios.get(urlWeather)
    // .then(res=> console.log(res))
      .then(res => this.setState({
        temp: res.data.main.temp,
        conditions: res.data.weather[0].description
      }))
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      })

      // gets random quote
      const urlQuote = `https://api.quotable.io/random`
      axios.get(urlQuote)
        //.then(res => console.log('res ', res))
        .then(res => this.setState({
          quote: res.data.content,
          author: res.data.author
        }))
        .catch(err => {
          console.log(err)
        })

      // creates clock 
      setInterval(() => {
        const now = moment()
        this.setState({
          time: now.format('hh:mm:ss A')
        }) 
      }, 1000)
  }

  render () {
    let url = this.state.backgroundUrl
    const { quote, author, time, temp, conditions} = this.state
    return (
      <div className='page' style={{  
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <Row className="row">
          <Col md="3" className="page1">Temperature: {temp}<br></br>
          Conditions: {conditions}</Col>
          <Col md="6"></Col>
          <Col md="3" className="page2">{time}</Col>
        </Row>
        <h5 className="fixed-bottom">
        Quote: {quote}<br/>Author: {author}</h5>
        
      </div>
          
      
    )
  }
}

export default Momentum
