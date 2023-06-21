import { Component } from 'react';	
import { Link } from 'react-router-dom';

import '../App.css';	

class Home extends Component {	
  render() {	
    return (	
      <main>	
        <div className="container sm:p-6">	
          <div className="row pt-12">	
            <div className="col text-center">	
              <div className="text-3xl text-white font-bold mb-5">	
                Welcome to Dot Task Tracker App!	
              </div>	
            </div>	
          </div>	
          <div className="row pt-5">	
            <div className="col text-center px-2">	
              <Link to="/login">	
                <button	
                  type="button"	
                  className="rounded-xl bg-indigo-600 px-12 py-4 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"	
                >	
                  Login	
                </button>	
              </Link>	
              <p className="mt-8 text-center text-sm text-gray-400">	
                Don't have an account?{' '}	
                <a href="signup" className="font-semibold text-white hover:text-indigo-500">	
                  Signup!	
                </a>	
              </p>	
            </div>	
          </div>	
        </div>	
      </main>	
    )	
  }	
}	

export default Home;