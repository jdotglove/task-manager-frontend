
import '../App.css';
import { Component } from 'react';
import MainHeader from '../components/headers/MainHeader';


class NoPage extends Component {
  render() {
    return (
      <div className="conatiner">
        <MainHeader />
        <div className="row">
          <div className="col text-center">
            <div className="text-3xl text-white font-bold mb-5">
              This page is not supported, rerouting you back to the home page
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NoPage;	
