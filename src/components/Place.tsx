import React, {useState} from 'react'
import {IPlace as IPlace, IProduct} from '../models'

interface PlaceProps {
  place: IPlace
}

export function Place({ place: place }: PlaceProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-yellow-700' : 'bg-lime-700'
  const btnClasses = ['py-2 px-4 border-neutral-800 border-2 rounded-lg', btnBgClassName]

  return (
    <div className="border-neutral-800 border-2 bg-myata-plant py-2 px-4 rounded bg-[#022919] flex flex-col items-center mb-2 text-white">
      <p className='py-1 px-1'><span className='font-bold'>{ place.title }</span></p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        { details ? 'Скрыть' : 'Детали' }
      </button>

      { details && 
      <div>
        <p><span className='font-bold'>Адрес:</span> { place.city }, { place.address }</p>
        <p><span className='font-bold'>Стоимость:</span> { place.approxPrice } </p>
        <p><span className='font-bold'>Качество услуг:</span> { place.quality } </p>
        <p><span className='font-bold'>VIP-комната:</span> { place.vipRoomInfo } </p>
        <br/>
        <p><span className='font-bold'>Плюсы:</span> { place.pros ?? "-" }</p>
        <p><span className='font-bold'>Минусы:</span> { place.cons ?? "-" }</p>
      </div> }

    </div>
  )
}