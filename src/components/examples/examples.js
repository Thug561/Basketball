import React from 'react'
import Typography from '../typography'

import CloseIcon from '../../assets/images/close.png'

import ex1 from '../../assets/images/examples/1.jpg'
import ex2 from '../../assets/images/examples/2.jpg'
import ex3 from '../../assets/images/examples/3.jpg'
import ex4 from '../../assets/images/examples/4.webp'
import ex5 from '../../assets/images/examples/5.webp'
import { getLocalValue } from '../../localize'
import useMedia from 'use-media'

const images = [ex1, ex2, ex3, ex4, ex5, ex3, ex4, ex5]
const captions = [
  'better gallery what i ever see!',
  'better gallery what i ever see!better gallery what i ever see!',
  'better gallery what i ever see!',
  'better gallery what i ever see!',
  'better gallery what i ever see!better gallery what i ever see!better gallery what i ever see!',
  'better gallery what i ever see!',
  'better gallery what i ever see!',
  'better gallery what i ever see!better gallery what i ever see!better gallery what i ever see!',
]

const Examples = ({ handleClose }) => {
  const isMobile = useMedia({ maxWidth: '870px' })
  const isExtraSmall = useMedia({ maxWidth: '530px' })

  return (
    <div
      className='fade'
      style={{
        height: '100vh',
        overflow: 'auto',
        background: '#000',
        width: '100%',
        position: 'fixed',
        zIndex: 9999999,
      }}
    >
      <div
        style={{
          padding: 10,
          height: '100vh',
          background: '#000',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <button
            onClick={handleClose}
            style={{
              padding: 10,
              position: 'fixed',
              margin: 10,
              marginRight: '1vw',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              style={{ width: 35, height: 35 }}
              src={CloseIcon}
              alt='close'
            />
          </button>
        </div>
        <div
          style={{
            maxWidth: 1400,
            margin: '5px auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: !isExtraSmall && !isMobile ? 20 : 0,
            }}
          >
            {images.map((item, index) => {
              return (
                <div
                  style={{
                    margin: 8,
                    borderRadius: 8,
                    background: '#111',
                  }}
                >
                  <div
                    style={{
                      background: `url(${item})`,
                      width: isExtraSmall ? '90vw' : isMobile ? '44vw' : '29vw',
                      height: isExtraSmall
                        ? '90vw'
                        : isMobile
                        ? '44vw'
                        : '29vw',
                      maxWidth: 410,
                      maxHeight: 410,
                      borderRadius: 2,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        height: '100%',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ flexGrow: 1 }} />
                      <Typography
                        style={{
                          //borderTop: '3px solid #000',
                          fontSize: 16,
                          maxWidth: 410,
                          padding: 10,
                          color: 'white',
                          background: 'rgba(12, 12, 12, 0.68)',
                          fontWeight: 500,
                          width: isExtraSmall
                            ? '90vw'
                            : isMobile
                            ? '44vw'
                            : '29vw',
                        }}
                        block
                      >
                        {captions[index] && captions[index].toUpperCase()}
                      </Typography>
                    </div>
                  </div>
                  {/* <Typography
                    style={{
                      //borderTop: '3px solid #000',
                      fontSize: 18,
                      maxWidth: 410,
                      padding: 10,
                      color: 'white',
                      fontWeight: 500,
                      width: isExtraSmall ? '90vw' : isMobile ? '44vw' : '29vw',
                    }}
                    block
                  >
                    {captions[index] && captions[index].toUpperCase()}
                  </Typography> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Examples
