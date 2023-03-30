import React, { RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';
import ChackBoxEntity from './check-box-entity/check-box-entity.component';

// class CheckBox extends React.Component {
//   read: RefObject<ChackBoxEntity>;
//   write: RefObject<ChackBoxEntity>;
//   execute: RefObject<ChackBoxEntity>;
//   constructor(props: Componentprops) {
//     super(props);
//     this.read = React.createRef<ChackBoxEntity>();
//     this.write = React.createRef<ChackBoxEntity>();
//     this.execute = React.createRef<ChackBoxEntity>();
//   }
//   render() {
//     return (
//       <div>
//         <ChackBoxEntity fieldName={'read'} ref={this.read} />
//         <ChackBoxEntity fieldName={'write'} ref={this.write} />
//         <ChackBoxEntity fieldName={'execute'} ref={this.execute} />
//       </div>
//     );
//   }
// }

const CheckBox = ({setPermitionsProp}) => {
  console.log('test');
  return (
    <div>
      <ChackBoxEntity fieldName={'read'} setPermitionsProp={setPermitionsProp} />
      <ChackBoxEntity fieldName={'write'} setPermitionsProp={setPermitionsProp} />
      <ChackBoxEntity fieldName={'execute'} setPermitionsProp={setPermitionsProp} />
    </div>
  );
};

export default CheckBox;
