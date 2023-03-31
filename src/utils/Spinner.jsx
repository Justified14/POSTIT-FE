import React from 'react'
import { Puff } from  'react-loader-spinner'

export default function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center">
<Puff
  height="80"
  width="80"
  radius={1}
  color="#0086b0"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}
