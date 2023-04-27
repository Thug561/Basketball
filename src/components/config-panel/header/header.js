import React from 'react'
import Typography from '../../typography'
import styles from './header.module.scss'

import eng_flag from '../../../assets/images/spa-flag.png' 
import spa_flag from '../../../assets/images/eng-flag.png'
import { Link } from 'react-router-dom'
import { getLocalValue } from '../../../localize'

const ConfigHeader = () => {
  return (
    <>
      <div className={styles.root}>
        <Typography
          className={styles.description}
          value={getLocalValue('config_panel_title')}
          style={{ color: '#F67C04', fontWeight: 600, fontSize: 18 }}
        />

        <div style={{ flexGrow: 1 }} />

        <div className={styles.lang_buttons}>
          {localStorage.getItem('lang') === 'sp' ? (
            <Link to='/en' className={styles.button}>
              <img className={styles.flags} alt='eng-flag' src={eng_flag} />
            </Link>
          ) : (
            <Link to='/' className={styles.button}>
              <img className={styles.flags} alt='eng-flag' src={spa_flag} />
            </Link>
          )}
        </div>
      </div>

      {/* <div className={styles.divider} /> */}
    </>
  )
}

export default ConfigHeader
