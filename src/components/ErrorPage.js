import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import { HomeSharp } from '@material-ui/icons';
import './ErrorPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ErrorPage extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleShow = () => this.setState({ show: true });

  handleClose = (fromModal) => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    this.setState({
      show: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <div className='modal'>
            <Modal
              show={this.state.show}
              onHide={() => this.handleClose({ msg: 'Cross Icon Clicked!' })}
            >
              <Modal.Header closeButton></Modal.Header>

              <Modal.Body>
                <h1 style={{ color: 'red', fontSize: 80 }}>404 ERROR!</h1>
                <h3 style={{ color: 'red', fontSize: 35, marginTop: 80 }}>
                  Please enter the correct URL
                </h3>
                <p className='home' style={{ fontSize: 150 }}>
                  <Link style={{ color: 'red' }} to='/'>
                    <HomeSharp style={{ fontSize: 50 }} />
                    <h3>Back Home</h3>
                  </Link>
                </p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant='danger'
                  onClick={() => this.handleClose({ msg: 'Modal Closed!' })}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : null}
      </div>
    );
  }
}
export default ErrorPage;
