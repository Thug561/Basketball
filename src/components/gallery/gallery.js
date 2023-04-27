import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import styles from './gallery.module.scss'
import gallery_button_icon from '../../assets/images/examp.png'

import ex1 from '../../assets/images/examples/1.jpg'
import ex2 from '../../assets/images/examples/2.jpg'
import ex3 from '../../assets/images/examples/3.jpg'
import ex4 from '../../assets/images/examples/4.webp'
import ex5 from '../../assets/images/examples/5.webp'
import { getLocalValue } from '../../localize'
import Typography from '../typography'

const images = [ex1, ex2, ex3, ex4, ex5]
const captions = [
  'Welcome to Heroku, the cloud platform that lets you stay focused on building apps - not managing infrastructure See how Heroku naturally fits into your development workflow so that deploys are fast, easy, and elegant.',
  'Welcome 123123 to Heroku, the cloud platform that lets you stay focused on building apps - not managing infrastructure See how Heroku naturally fits into your development workflow so that deploys are fast, easy, and elegant.',
  'Welcome  5345345 to Heroku, the cloud platform that lets you stay focused on building apps - not managing infrastructure See how Heroku naturally fits into your development workflow so that deploys are fast, easy, and elegant.',
  'Welcome 5645646 to Heroku, the cloud platform that lets you stay focused on building apps - not managing infrastructure See how Heroku naturally fits into your development workflow so that deploys are fast, easy, and elegant.',
]

const configs = [
  {
    size: {
      width: 5.5,
      length: 7.5,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'GOLIATH G46',
    colors: {
      paint: '#279B6F',
      zone: '#279B6F',
      court: '#279B6F',
      safety: '#279B6F',
    },
    zoom_to_hoop: false,
  },
  {
    size: {
      width: 5.5,
      length: 7.5,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'GOLIATH G46',
    colors: {
      paint: '#B23730',
      zone: '#B23730',
      court: '#B23730',
      safety: '#B23730',
    },
    zoom_to_hoop: false,
  },
  {
    size: {
      width: 5.5,
      length: 7.5,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'GOLIATH G46',
    colors: {
      paint: '#3975B7',
      zone: '#3975B7',
      court: '#3975B7',
      safety: '#3975B7',
    },
    zoom_to_hoop: false,
  },
  {
    size: {
      width: 5.5,
      length: 7.5,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'GOLIATH G46',
    colors: {
      paint: '#8E51A8',
      zone: '#8E51A8',
      court: '#8E51A8',
      safety: '#8E51A8',
    },
    zoom_to_hoop: false,
  },
  {
    size: {
      width: 5.5,
      length: 7.5,
      borders: false,
      type: 'custom',
      safety_zone_width: 0,
      safety_zone_length: 0,
    },
    basket_type: 'GOLIATH G46',
    colors: {
      paint: '#005B8D',
      zone: '#005B8D',
      court: '#005B8D',
      safety: '#005B8D',
    },
    zoom_to_hoop: false,
  },
]

const SetConfigButton = ({ index, handleClose, handleChangeConfig }) => {
  const handleSetConfigByPhoto = () => {
    handleChangeConfig(configs[index])
    handleClose()
  }
  return (
    <button
      onClick={handleSetConfigByPhoto}
      style={{
        position: 'absolute',
        left: 10,
        top: 8,
        background: 'transparent',
        //border: '1px solid #F67C04',
        border: '1px solid #b1b1b1',
        borderRadius: 3,
        padding: 8,
        cursor: 'pointer',
      }}
    >
      <Typography block style={{ fontWeight: 500, fontSize: 14, maxWidth:'45vw', whiteSpace:'pre-wrap' }}>
       {getLocalValue('set this court configs').toUpperCase()}
      </Typography>
    </button>
  )
}

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <div
        style={{
          //borderTop: '2px solid #fff',
          //borderLeft: '2px solid #fff',
          //borderBottom: '2px solid #fff',
          //marginTop: '15px',
          //marginLeft: '10px',
          //border: '2px solid #f67c04',
          // marginTop: 5,
          //padding: 2,
          width: '100%',
          //padding: '2px 0px 2px 2px',
        }}
      >
        <button
          className={styles.f}
          type='button'
          onClick={() => this.setState({ isOpen: true })}
          style={{
            background: '#f67c04',
            cursor: 'pointer',
            border: 'none',
            width: '100%',
            // height: 56,
            padding: '8px 30px',

            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              style={{ width: 29, height: 29 }}
              src={gallery_button_icon}
              alt='gallery'
            />
          </div>
          <Typography
            block
            style={{
              fontWeight: 600,
              fontSize: 17,
              color: 'white',
              textAlign: 'left',
              marginLeft: 8,
            }}
          >
            {getLocalValue('for example').toUpperCase()}
          </Typography>
        </button>

        {isOpen && (
          <Lightbox
            imageCaption={
              <Typography style={{ color: 'inherit' }}>
                {captions[this.state.photoIndex]}
              </Typography>
            }
            toolbarButtons={[
              <SetConfigButton
                handleChangeConfig={this.props.handleChangeConfig}
                handleClose={() => this.setState({ isOpen: false })}
                index={this.state.photoIndex}
              />,
            ]}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default Gallery
