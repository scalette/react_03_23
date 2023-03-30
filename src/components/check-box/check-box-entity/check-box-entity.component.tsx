import React, { RefObject } from 'react';

interface ChackBoxEntityProps {
  fieldName: 'read' | 'write' | 'execute';
  setPermitionsProp: (permitionObj: { read: boolean; write: boolean; execute: boolean }) => void;
}
// class ChackBoxEntity extends React.Component {
//   inputValue: RefObject<HTMLInputElement>;
//   props: ChackBoxEntityProps;
//   constructor(props: ChackBoxEntityProps) {
//     super(props);
//     this.props = props;
//     this.inputValue = React.createRef<HTMLInputElement>();
//   }
//   render() {
//     return (
//       <div>
//         <label>
//           <input type="checkbox" ref={this.inputValue} />
//           {this.props.fieldName}
//         </label>
//       </div>
//     );
//   }
// }

const ChackBoxEntity = ({ fieldName, setPermitionsProp }: ChackBoxEntityProps) => {
  console.log('ChackBoxEntity test');
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() =>
            setPermitionsProp((prevState) => ({
              ...prevState,
              [fieldName]: !prevState[fieldName],
            }))
          }
        />
        {fieldName}
      </label>
    </div>
  );
};

export default ChackBoxEntity;
