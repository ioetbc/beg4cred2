import React from 'react'

export const PrimaryButton = ({ text, url }) => {
  return (
    <a className="button primary" href={url} >{text}</a>
  )
}
