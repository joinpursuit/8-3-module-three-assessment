import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <section>
        <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>
          Page Not Found
          <Link to='/home'>Home</Link>
        </h1>
      </section>
    );
  }
}

export default Page404;
