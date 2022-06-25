import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <section>
        <h1 style={{ textAlign: 'center', padding: '2rem 0' }}>
          Page Not Found
        </h1>
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <Link to='/'>Home</Link>
        </div>
      </section>
    );
  }
}

export default Page404;
