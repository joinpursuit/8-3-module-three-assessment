// // import React, { Component } from 'react';

// // import ButtonHolder from './ButtonHolder'
// // import Input from './ButtonInput'
// class PeopleDetails extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {peopleNames:this.props.people,
//         value: '',
//         refresh: false,
//     };
//   }
//   updateValue = letter => {
//     this.setState({
//       value: this.state.value + letter,
//     })
//   }

//   clearWord = () => {
//     this.setState(prevState => {
//       return {
//         value: '',
//         refresh: !prevState.refresh,
//       }
//     })
//   }
//   render() {
//     console.log('inpeopledetails',this.props.people,this.state.peopleNames)
//     return (<div>
//         <ButtonHolder
//           peopleNames={this.state.peopleNames}
//           updateValue={this.updateValue}
//           refresh={this.state.refresh}
//         />
//         <Input value={this.state.value} />
//         <button onClick={this.clearWord}>Clear</button>
//       </div>);
//   }
// }

// export default PeopleDetails;
