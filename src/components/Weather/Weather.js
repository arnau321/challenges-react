import React, { Component } from 'react'
import '../../../src/index.css'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import './StyleWeather.css'
import axios from 'axios'


class Weather extends Component {
  constructor (props) {
    super(props)
    this.state = {
        city: '',
        state: '',
        
        location: null,
        country: null,
        temperature: null,
        humidity: null,
        conditions: ''

    }
  }

  handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

  onGetWeather = (event) =>{
    event.preventDefault()
const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.state}&units=imperial&appid=e20a75e27a49a2e8acfee2fcfa0691d1`

axios.get(url)
// .then(res=> console.log(res))
  .then(res => this.setState({
    location: res.data.name,
    country: res.data.sys.country,
    temperature: res.data.main.temp,
    humidity: res.data.main.humidity,
    conditions: res.data.weather[0].description
  }))
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }

  render () {
    const { city, state, location, country, temperature, humidity, conditions } = this.state
    return (
      <>
          <Container>
            <Row className="weather">
              <Col className="leftBlock">1 of 2</Col>

              <Col className="rightBlock">
                <div className='row'>
                  <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <Form onSubmit={this.onGetWeather}>
                      <Form.Group controlId='weather'>
                        <Form.Control
                          required
                          type='text'
                          name='city'
                          value={city}
                          placeholder='City'
                          onChange={this.handleChange}
                        /><br></br>
                      </Form.Group>
                      <Form.Group controlId='state'>
                        <Form.Control
                          name='state'
                          value={state}
                          type='text'
                          placeholder='State'
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                      <Button variant='primary' type='submit'>Get Weather</Button>
                    </Form>
                  </div>
                </div>
                {/* <h4>Location: {location}, {country}</h4>
                <h4>Temperature: {temperature} F</h4>
                <h4>Humidity: {humidity}%</h4>
                <h4>Conditions: {conditions}</h4> */}
                <Table responsive="sm">
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Location: </td>
                    <td>{location}, {country}</td>
                  </tr>
                  <tr>
                    <td>Temperature: </td>
                    <td>{temperature} </td>
                  </tr>
                  <tr>
                    <td>Humidity: </td>
                    <td>{humidity}</td> 
                  </tr>
                  <tr>
                    <td>Conditions: </td>
                    <td>{conditions}</td>
                  </tr>
                  </tbody>
                </Table>
             </Col>
            </Row>
          </Container>
      </>
    )
  }
}

export default Weather
