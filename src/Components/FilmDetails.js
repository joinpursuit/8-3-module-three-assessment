import { React, Component } from 'react';
import { useParams } from 'react-router-dom';
import './FilmDetail.css';
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class FilmDetails extends Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    console.log('id', id);
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log('data', data);
        this.setState({
          result: data,
        });
      });
  }
  render() {
    const { result } = this.state;
    return (
      <div className='film-card'>
        <div className='film-image'>
          <img
            src={`${result.image}`}
            alt={`${result.title}`}
            className='image'
          />
        </div>
        <div className='film-details'>
          <p class='details'>
            Film Title:<span>{result.title}</span>
          </p>

          <p class='details'>
            Original Title:<span>{result.original_title}</span>
          </p>
          {/* </div>
          <div className='MovieInfo'> */}
          {/* <p>Romanised Title:</p> */}
          <p class='details'>
            Romanised Title:<span>{result.original_title_romanised}</span>
          </p>

          <p class='details'>
            Director: <span>{result.director}</span>
          </p>

          <p class='details'>
            Producer:<span>{result.producer}</span>
          </p>

          <p class='details'>
            Release Year:<span>{result.release_date}</span>
          </p>

          <p class='details'>
            Running Time:<span>{result.running_time}</span>
          </p>

          <p class='details'>
            Rotten Tomatoes:<span>{`${result.rt_score} minutes`}</span>
          </p>

          <p class='details'>Description:{`${result.description}`}</p>
        </div>
      </div>
    );
  }
}

export default withParams(FilmDetails);
