import React from 'react'

export const SearchInputComponent = (props) => {

  return (
      <input type={props.type} placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChangeFunction} required={props.required} />
  )
}