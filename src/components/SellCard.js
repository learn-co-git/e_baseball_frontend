import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const SellCard = () => {

  const dispatch = useDispatch()

  const [player_name, setPlayer_name] = useState('')
  const [year, setyear] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')

  const onPlayer_nameChange = e => setPlayer_name(e.target.value)
  const onYearChange = e => setyear(e.target.value)
  const onBrandChange = e => setBrand(e.target.value)
  const onDescriptionChange = e => setDescription(e.target.value)
  const onPriceChange = e => setPrice(e.target.value)
  const onUrlChange = e => setUrl(e.target.value)

  const saveCard = () => {
    const cardDetails = {
      player_name: player_name,
      year: year,
      brand: brand,
      description: description,
      price: price,
      url: url
    }

  }

  return (
    <section>
      <h2>Sell Card</h2>
      <form>
        <label>Player: </label>
        <input
          type="text"
          name="player_name"
          value={player_name}
          onChange={onPlayer_nameChange}
          />
        <br/>
        <label>Year: </label>
        <input
          type="text"
          name="year"
          value={year}
          onChange={onYearChange}
          />
        <br/>
        <label>Brand: </label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={onBrandChange}
          />
        <br/>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onDescriptionChange}
          />
        <label>Price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={onPriceChange}
            />
          <label>Url: </label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={onUrlChange}
              />
            <button type="button" onClick={saveCard}>Sell</button>
      </form>
    </section>
  )
}

export default SellCard
