// // import React from 'react';
// // import Button from './Button';

// class ButtonHolder extends React.Component {
//   state = {
//     refresh: false,
//   };
//   componentDidUpdate(prevProps) {
//     if (this.props.refresh !== prevProps.refresh) {
//       this.setState((prevState) => {
//         return {
//           refresh: !prevState.refresh,
//         };
//       });
//     }
//   }

//   createButtons = () => {
//     const personNames = this.props.peopleNames;
//     return personNames.map((names) => (
//       <Button names={names} updateValue={this.props.updateValue} />
//     ));
//   };

//   render() {
//     const refresh = this.state.refresh;
//     return (
//       <div>
//         {!refresh ? this.createButtons() : null}
//         {refresh ? this.createButtons() : null}
//       </div>
//     );
//   }
// }

// export default ButtonHolder;
