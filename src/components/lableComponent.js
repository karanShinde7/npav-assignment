import React from 'react';

const LabelComponent = (props) => {
  return (
    <label className="label-style">{props.children}</label>
  )
}

export default LabelComponent;