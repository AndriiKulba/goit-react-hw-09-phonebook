import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import { userAuthActions } from '../redux/user';

export default function ErrorMassage({ error }) {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(userAuthActions.resetError(''));
  };

  return (
    <div className="msg_error msg_error_active">
      <h3>Attention!!!</h3>
      <p>{error}</p>
      <button className="close_btn" onClick={onClose}>
        <Icon style={{ color: grey[500], fontSize: 20 }}>close</Icon>
      </button>
    </div>
  );
}

// class ErrorMassage extends Component {
//   onclic = () => {
//     this.props.resetError('');
//   };
//   render() {
//     const { error } = this.props;
//     return (
//       <div className="msg_error msg_error_active">
//         <h3>Attention!!!</h3>
//         <p>{error}</p>
//         <button className="close_btn" onClick={this.onclic}>
//           <Icon style={{ color: grey[500], fontSize: 20 }}>close</Icon>
//         </button>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   resetError: value => dispatch(userAuthActions.resetError(value)),
// });
// export default connect(null, mapDispatchToProps)(ErrorMassage);
