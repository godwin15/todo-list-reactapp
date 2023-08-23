import React from 'react'

export const ProgressBar = ({progress}) => {

  const colors = [
    'rgb(255, 215, 161)',
    'rgb(255, 175, 163)',
    'rgb(108, 148, 161)',
    'rgb(141, 104, 145)'
  ]
  const randomColor = colors[Math.floor(Math.random()*colors.length)]
  return (
    <div className='outer-bar'> 
      <div 
        className='inner-bar'
        style={{width:`${progress}%`, backgroundColor:randomColor}}
        >
        
      </div>
    </div>
  )
}
