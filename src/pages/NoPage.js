
import '../App.css';
import { Component } from 'react';


class NoPage extends Component {
  render() {
    return (
      <div className="conatiner">
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
