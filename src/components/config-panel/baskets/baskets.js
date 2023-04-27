import React from 'react'
import DropDown from '../../dropdown/dropdown'
import Typography from '../../typography'

import basket_image from '../../../assets/images/basket.png'
import without_icon from '../../../assets/images/without-icon.png'
import { getLocalValue } from '../../../localize'

const Baskets = ({
  active,
  handleChangeActiveSection,
  handleChangeConfig,
  config,
}) => {
  return (
    <div>
      <DropDown
        isDrop={active}
        handleDrop={handleChangeActiveSection}
        id='hoops'
        dropedContent={
          <BasketsDropedContent
            handleChangeConfig={handleChangeConfig}
            config={config}
          />
        }
        buttonEndContent={<BasketsEndContent config={config} />}
      />
    </div>
  )
}

const BasketsEndContent = ({ config }) => {
  return (
    <Typography
      style={{ fontWeight: 500 }}
      value={
        config.basket_type === 'WITHOUT HOOP'
          ? getLocalValue('without hoop').toUpperCase()
          : config.basket_type
      }
    />
  )
}

const baskets = [
  { name: 'WITHOUT HOOP', image: without_icon },
  { name: 'Goaliath GB50', image: basket_image },
  { name: 'Goaliath GB54', image: basket_image },
  { name: 'Goaliath GB60', image: basket_image },
  { name: 'Goalrilla CV72', image: basket_image },
  { name: 'Goalrilla CV54', image: basket_image },
  { name: 'Goalrilla CV60', image: basket_image },
  { name: 'Goalrilla GS54', image: basket_image },
  { name: 'Goalrilla GS60', image: basket_image },
  { name: 'Goalrilla GS72', image: basket_image },

]

const BasketsDropedContent = ({ handleChangeConfig, config }) => {
  const selectedBasket = config.basket_type

  // const hanldeSetWithoutBasket = () => {
  //   const cloneConfig = JSON.parse(JSON.stringify(config))
  //   cloneConfig.basket_type = ''
  //   handleChangeConfig(cloneConfig)
  // }
  
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px 20px',
        paddingBottom: 30,
      }}
    >
      {baskets.map((item, index) => {
        return (
          <BasketItem
            key={index}
            basket={item}
            active={selectedBasket === item.name}
            handleChangeConfig={handleChangeConfig}
            config={config}
          />
        )
      })}
    </div>
  )
}

const BasketItem = ({ basket, active, handleChangeConfig, config }) => {
  console.log(basket, active, config);
  const handleChangeBasketType = () => {
    const cloneConfig = JSON.parse(JSON.stringify(config))
    if (!config.zoom_to_hoop) cloneConfig.zoom_to_hoop = true
    cloneConfig.basket_type = basket.name
    handleChangeConfig(cloneConfig)
    document.kek.alpha = 0;
    document.kek.beta = 0;

    document.lol(0, 0, 0);
    console.log(document.kek.position);
  }
  return (
    <div>
      <button
        onClick={handleChangeBasketType}
        style={{
          cursor: 'pointer',
          background: 'transparent',
          border: active ? '2px solid #F67C04' : 'none',
          borderRadius: 2,
          marginRight: 5,
          marginTop: 10,
          paddingTop: 2,
          width: 72,
          height: 72,
        }}
      >
        <img
          alt='hoop'
          style={{
            width: 58,
            height: 58,
            border: '2px solid #7D7D7D',
          }}
          src={basket.image}
        />
      </button>
      <Typography
        block
        value={
          basket.name === 'WITHOUT HOOP'
            ? getLocalValue('without hoop').toUpperCase()
            : basket.name.toUpperCase()
        }
        style={{
          color: active ? 'white' : '#7D7D7D',
          fontSize: 12,
          fontWeight: 500,
          width: 70,
          textAlign: 'center',
        }}
      />
    </div>
  )
}
export default Baskets
