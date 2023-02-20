import {useEffect, useState} from 'react'
import {IPlace, ISearchPlacesProps} from '../models'
import axios, {AxiosError} from 'axios'

export function usePlaces() {
  const [places, setPlaces] = useState<IPlace[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // добавление новой кальянной
  function addPlace(place: IPlace) {
    setPlaces(prev => [...prev, place])
  }

  // вывод кальянных, которые выбраны по фильтру
  function selectPlaces(selectedPlaces: IPlace[]) {
    setPlaces(prev => [...selectedPlaces])
  }

  async function fetchPlaces() {
    try {
      setError('')
      setLoading(true)

      const response = await axios.get<IPlace[]>('http://localhost:5211/place/all')
      setPlaces(response.data)

      // }
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchPlaces()
    console.log('useEffect on place')
  }, [])

  return { places: places, error, loading, addPlace: addPlace, selectPlaces: selectPlaces }
}