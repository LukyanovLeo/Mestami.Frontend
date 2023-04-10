import React, {useState} from 'react'
import axios from 'axios'
import { IPlace } from '../models'
import { TextField } from '../components/form/TextField'
import { ErrorMessage } from '../components/ErrorMessage'
import { Button } from '../components/form/Button'
const placeData: IPlace =  {
    title: '',
    address: "Нет данных",
    approxPrice: "-",
    pros: "-",
    cons: "-",

    quality: "5",
    vipRoomInfo: '',
    isTest: true,
}

interface CreatePlaceProps {
  onCreate: (place: IPlace) => void
}

export function CreateNewPlacePage({ onCreate }: CreatePlaceProps) {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [approxPrice, setPrice] = useState('')
  const [pros, setPros] = useState('')
  const [cons, setCons] = useState('')
  const [quality, setQuality] = useState('')
  const [error, setError] = useState('')

  const changeTitleHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const changeAddressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setAddress(event.target.value)
  }
  const changePriceHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }
  const changeProsHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setPros(event.target.value)
  }
  const changeConsHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setCons(event.target.value)
  }
  const changeQualityHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]{1}$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      setQuality(event.target.value)
    }
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (title.trim().length === 0) {
      setError('Please enter valid data.')
      return
    }

    placeData.title = title
    placeData.address = address
    placeData.approxPrice = approxPrice
    placeData.pros = pros
    placeData.cons = cons
    placeData.quality = quality

    const response = await axios.post<IPlace>('http://localhost:5211/loungebar/new', placeData)

    onCreate(response.data)
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField label="Название" value={title} onChange={changeTitleHandler} />      
      <TextField label="Адрес" value={address} onChange={changeAddressHandler} />
      <TextField label="Цена" value={approxPrice} onChange={changePriceHandler} />
      <TextField label="Плюсы" value={pros} onChange={changeProsHandler} />
      <TextField label="Минусы" value={cons} onChange={changeConsHandler} />
      <TextField label="Качество услуг" value={quality} onChange={changeQualityHandler} />

      {error && <ErrorMessage error={error} />}

      <Button label="Добавить"/>
    </form>
  )
}