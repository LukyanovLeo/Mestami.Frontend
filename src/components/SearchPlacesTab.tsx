import axios from "axios";
import { useState } from "react";
import { IPlace as IPlace, ISearchPlacesProps as ISearchPlacesProps } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const placesSearchData : ISearchPlacesProps = {
  city: 'Москва',
  title: '',
  address: '',
  metroStation: '',
}

interface SelectPlaceProps {
  onSelect: (places: IPlace[]) => void
}

export function SearchPlacesTab({ onSelect }: SelectPlaceProps) {
  const [cityValue, setCityValue] = useState('Москва')  // пока только для Москвы
  const [titleValue, setTitleValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [metroStationValue, setMetroStationValue] = useState('')

  const [error, setError] = useState('')

  const titleChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setTitleValue(event.target.value)
  }
  const addressChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value)
  }
  const metroStationChangeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setMetroStationValue(event.target.value)
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    placesSearchData.title = titleValue
    placesSearchData.address = addressValue
    placesSearchData.metroStation = metroStationValue
    const response = await axios.post<IPlace[]>('http://localhost:5211/place/filter', placesSearchData)

    onSelect(response.data)
  }

  return (
    <div className="container-fluid bg-emerald-700 py-3 px-4">  
        <form className="w-full" onSubmit={submitHandler}>
        <div className="flex">
          <div className="w-full md:w-1/6 px-3 mb-4">
              <label className="block uppercase tracking-wide text-neutral-200 text-xs font-bold mb-2">
                Город
              </label>
              <input className="appearance-none block w-full bg-gray-400 placeholder-yellow-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="city" 
                  type="text" 
                  placeholder="Москва"
                  disabled/>
          </div>
          <div className="w-full md:w-1/5 px-3 mb-4">
              <label className="block uppercase tracking-wide text-neutral-200 text-xs font-bold mb-2">
                Название
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="address" 
                  type="text" 
                  placeholder="Кафе"
                  value={titleValue}
                  onChange={titleChangeHandler}/>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-4">
              <label className="block uppercase tracking-wide text-neutral-200 text-xs font-bold mb-2">
                Адрес
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="address" 
                  type="text" 
                  placeholder="ул. Ленина, 1"
                  value={addressValue}
                  onChange={addressChangeHandler}/>
          </div>
          <div className="w-full md:w-1/6 px-3 mb-4">
              <label className="block uppercase tracking-wide text-neutral-200 text-xs font-bold mb-2">
                Станция метро
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  id="metro-station" 
                  type="text" 
                  placeholder="Театральная"
                  value={metroStationValue}
                  onChange={metroStationChangeHandler}/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-4">
           <br/>
            <button type="submit" className="text-neutral-800 w-full px-3 mb-4 py-2 border bg-red-500 hover:bg-yellow-400 hover:text-black">Найти</button>
          </div>
        </div>
        </form>
    </div>
  )
}
