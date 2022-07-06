import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import './FilmCard.css';

class FilmCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { id, title, release, image } = this.props;

    return (
      <div className='filmCard' key={this.props.id}>
        <Link to={`/FilmDetails/${id}`} >
          <img
            style={{ width: '320px', height: '500px' }}
            src={image}
            alt={title}
          />
          <FaArrowCircleRight className='CircleArrow' />
          <div className='FilmDescription'>
            <h3>{title}</h3>
            <p>{release}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default FilmCard;
