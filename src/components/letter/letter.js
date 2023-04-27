import Typography from '../typography'
import { useMedia } from 'use-media'
import CloseIcon from '../../assets/images/close.png'
import Logo from '../../assets/images/logo.png'
//import Basket from '../../assets/images/basket.png'
import { getLocalValue } from '../../localize'
import { useState } from 'react'
import {send} from 'emailjs-com'

const Letter = ({ config, handleClose }) => {
  const [isInputsFocused, setIsInputsFocused] = useState(false)
  const [form, setForm] = useState({
    email:'',
    name:'',
    phone:'',
  })

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = (e) => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    delete cloneConfig.zoom_to_hoop
    e.preventDefault()
    console.log(form, 'form')
    send(
      'service_d1xv74b',
      'template_eamz20g',
      {...form, config:JSON.stringify(cloneConfig)},
      'user_tSIIGeThFg3IyxYC3qR5E'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }
  const isMobile = useMedia({ maxWidth: '799px' })
  const isExtraSmall = useMedia({ maxWidth: '350px' })
  const colors_sections = ['paint', 'zone', 'court', 'safety']
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row-reverse',
        height: isMobile ? '100vh' : 'auto',
        background: '#000000',
      }}
    >
      {/* FORM */}
      <div
        style={{
          flexShrink: 1,
          padding: 30,
          paddingTop: isExtraSmall ? 20 : 20,
          background: '#000000',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'none' : 'center',
          borderLeft: isMobile ? 'none' : '2px solid #F67C04',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0',
            maxWidth: 330,
            width: '100%',
          }}
        >
          <img src={Logo} alt='logo' />
          {isMobile && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                width: '100%',
              }}
            >
              <button
                onClick={handleClose}
                style={{
                  background: 'transparent',
                  border: 'none',
                  margin: 10,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={CloseIcon}
                  style={{ width: 25, height: 25 }}
                  alt='close'
                />
              </button>
            </div>
          )}

          {!isMobile && <div style={{ flexGrow: 1 }} />}

          {!isMobile && (
            <button
              onClick={handleClose}
              style={{
                background: 'transparent',
                border: 'none',
                margin: 10,
                cursor: 'pointer',
              }}
            >
              <img
                src={CloseIcon}
                style={{ width: 25, height: 25 }}
                alt='close'
              />
            </button>
          )}
        </div>
        {!isMobile || (isMobile && !isInputsFocused) ? (
          <Typography
            style={{
              maxWidth: '330px',
              fontWeight: 500,
              fontSize: 16,
              color: '#7D7D7D',
            }}
          >
            {getLocalValue('letter_message')}
          </Typography>
        ) : null}
        <form
          onSubmit = {handleSubmitForm}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <input
            name = 'name'
            onChange = {handleChangeForm}
            onFocus={() => setIsInputsFocused(true)}
            onBlur={() => setIsInputsFocused(false)}
            style={{
              padding: 8,
              width: '100%',
              maxWidth: '330px',
              marginTop: 10,
              background:'white',
              color:'#111',
             
            }}
            placeholder={getLocalValue('name')}
            required
          />
          <input
            name = 'email'
            onChange = {handleChangeForm}
            onFocus={() => setIsInputsFocused(true)}
            onBlur={() => setIsInputsFocused(false)}
            style={{
              padding: 8,
              width: '100%',
              maxWidth: '330px',
              marginTop: 10,
              background:'white',
              color:'#111',
            }}
            placeholder={getLocalValue('email')}
            required
          />
          <input
            name = 'phone'
            onChange = {handleChangeForm}
            onFocus={() => setIsInputsFocused(true)}
            onBlur={() => setIsInputsFocused(false)}
            style={{
              padding: 8,
              width: '100%',
              maxWidth: '330px',
              marginTop: 10,
              background:'white',
              color:'#111',
            }}
            placeholder={getLocalValue('phone')}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: '100%',
              maxWidth: 330,
            }}
          >
            <button
              style={{
                width: 167,
                height: 42,
                border: 'none',
                borderRadius: 3,
                background: '#F67C04',
                cursor: 'pointer',
                padding: 10,
                marginTop: 20,
                marginBottom: isMobile ? 15 : 0,
              }}
            >
              <Typography
                block
                value={getLocalValue('send').toUpperCase()}
                style={{ color: 'white', fontSize: 18, fontWeight: 600 }}
              />
            </button>
          </div>
        </form>
      </div>
      {/* CONFIGS */}
      <div
        style={{
          background: '#222222',
          padding: 30,
          paddingTop: 30,
          paddingLeft: isExtraSmall ? 15 : 30,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: isMobile ? '2px solid #F67C04' : 'none',
        }}
      >
        {/* SIZE */}
        <div style={{ display: 'flex', width: '100%', maxWidth: 330 }}>
          <Typography
            block
            value={getLocalValue('size').toUpperCase()}
            style={{
              color: '#F67C04',
              fontSize: 18,
              width: 70,
              fontWeight: 600,
              marginRight: 20,
            }}
          />
          <div>
            <Typography
              block
              value={` ${config.size.width}x${config.size.length}m`}
              style={{ fontSize: 15, fontWeight: 500 }}
            />
            <Typography block style={{ fontSize: 12, fontWeight: 500 }}>
              {config.size.width * config.size.length}m<sup>2</sup>{' '}
              {config.size.width * config.size.length * 16}{' '}
              {getLocalValue('tiles')}
            </Typography>
          </div>
        </div>
        {/* COLORS */}
        <div
          style={{
            display: 'flex',
            marginTop: 35,
            width: '100%',
            maxWidth: 330,
          }}
        >
          <Typography
            block
            value={getLocalValue('colors').toUpperCase()}
            style={{
              color: '#F67C04',
              fontSize: 18,
              width: 70,
              fontWeight: 600,
              marginRight: 20,
            }}
          />
          <div style={{ display: 'flex' }}>
            {colors_sections.map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    marginRight: 17,
                    width: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    block
                    value={getLocalValue(item).toUpperCase()}
                    style={{
                      fontWeight: 500,
                      fontSize: 12,
                      paddingBottom: 3,

                      //borderBottom: `6px solid ${config.colors[item]}`,
                    }}
                  />

                  <div
                    style={{
                      borderTop: `6px solid ${config.colors[item]}`,
                      width: 30,
                      // margin: '0 auto',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* BASKET */}
        <div
          style={{
            display: 'flex',
            marginTop: 35,
            width: '100%',
            maxWidth: 330,
          }}
        >
          <Typography
            block
            value={getLocalValue('hoop').toUpperCase()}
            style={{
              color: '#F67C04',
              fontSize: 18,
              width: 70,
              marginRight: 20,
              fontWeight: 600,
            }}
          />
          {config.basket_type !== 'WITHOUT HOOP' ? (
            // <div>
            //   <img
            //     alt='hoop'
            //     style={{
            //       width: 68,
            //       height: 68,
            //       border: '2px solid #7D7D7D',
            //     }}
            //     src={Basket}
            //   />

            //   <Typography
            //     block
            //     value={config.basket_type}
            //     style={{
            //       marginTop: 3,
            //       color: 'white',
            //       fontSize: 12,
            //       fontWeight: 500,
            //       width: 68,
            //       textAlign: 'center',
            //     }}
            //   />
            // </div>
            <Typography
              value={config.basket_type}
              style={{ fontWeight: 600 }}
            ></Typography>
          ) : (
            <Typography style={{ fontWeight: 600 }}>
              {getLocalValue('without hoop').toUpperCase()}
            </Typography>
          )}
        </div>
      </div>
      <div style={{ flexGrow: 1, background: '#222222' }} />
    </div>
  )
}

export default Letter
