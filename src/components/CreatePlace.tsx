import React, {useState} from 'react'
import {IPlace as IPlace} from '../models'
import axios from 'axios'
import {ErrorMessage} from './ErrorMessage'
import { TextField } from './form/TextField'
import { Button } from './form/Button'

const placeData: IPlace =  {
    title: '',
    address: "Нет данных",
    approxPrice: "-",
    pros: "-",
    cons: "-",

    quality: "Норм",
    vipRoomInfo: '',
    isTest: true,
}

interface CreatePlaceProps {
  onCreate: (place: IPlace) => void
}

export function CreatePlace({ onCreate }: CreatePlaceProps) {
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')
  const [approxPrice, setPrice] = useState('')
  const [pros, setPros] = useState('')
  const [cons, setCons] = useState('')
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

    const response = await axios.post<IPlace>('http://localhost:5211/place/new', placeData)

    onCreate(response.data)
  }

  return (
    <form onSubmit={submitHandler}>
      <TextField label="Название" value={title} onChange={changeTitleHandler} />      
      <TextField label="Адрес" value={address} onChange={changeAddressHandler} />
      <TextField label="Цена" value={approxPrice} onChange={changePriceHandler} />
      <TextField label="Плюсы" value={pros} onChange={changeProsHandler} />
      <TextField label="Минусы" value={cons} onChange={changeConsHandler} />

      {error && <ErrorMessage error={error} />}

      <Button label="Добавить"/>
    </form>
  )
}