import React from 'react'

export const TodoFooter = ({nrTask}) => {
  return (
    <div style={{position:"absolute",right:"5px",bottom:"5px"}}>
        Tasks:{nrTask}
    </div>
  )
}
