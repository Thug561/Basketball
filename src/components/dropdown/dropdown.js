import React from 'react'
import styles from './dropdown.module.scss'

import arrow_right from '../../assets/images/arrow-right.png'
import arrow_down from '../../assets/images/arrow-down-active.png'
import Typography from '../typography'
import { getLocalValue } from '../../localize'

const DropDown = ({
  isDrop,
  handleDrop,
  id,
  buttonEndContent,
  dropedContent,
}) => {
  return (
    <>
      <button
        onClick={() => handleDrop(isDrop ? '' : id)}
        className={styles.root}
      >
        <div
          style={{
            borderTop: isDrop ? '2px solid #F67C04' : '1px solid white',
          }}
          className={styles.button_content}
        >
          <Typography
            value={getLocalValue(id).toUpperCase()}
            style={{
              fontSize: 18,
              fontWeight: 600,
              borderBottom: isDrop ? '2px solid #F67C04' : 'none',
            }}
          />
          <div style={{ flexGrow: 1 }} />
          {buttonEndContent}
          {/* <div style={{ color: 'white' }}>END CONTENT</div> */}
          <img
            style={{ width: 20, height: 20, marginLeft: 10 }}
            src={isDrop ? arrow_down : arrow_right}
            alt='arrow'
          />
        </div>
      </button>
      {isDrop && dropedContent}
    </>
  )
}

export default DropDown
