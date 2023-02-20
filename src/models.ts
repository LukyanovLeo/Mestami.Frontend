export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export interface IBasePlace {
  id?: number
  city?: number
  title: string
  address: string
  approxPrice: string
  pros?: string
  cons?: string
}

export interface IPlace extends IBasePlace {
  quality: string
  vipRoomInfo: string
  isTest: boolean
}

export interface ISearchPlacesProps {
  city: string
  title: string
  address: string
  metroStation: string
}