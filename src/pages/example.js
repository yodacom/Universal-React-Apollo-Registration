import React from 'react';
import {Helmet} from 'react-helmet';
import withAuth from './../hoc/withAuth';

class Example extends React.Component {

    head(){
        return(
            <Helmet>
              <title>Example Title</title>
            </Helmet>
        )
    }

    render () {
        return(
            <div>
              {this.head()}
              <h1>My Example page</h1>
              <p> My Content</p>
            </div>

        )
    }
}
export default withAuth(session => session && session.getCurrentUser) (Example);