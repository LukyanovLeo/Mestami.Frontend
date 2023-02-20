import axios, { AxiosError } from "axios"
import { useContext, useState } from "react"
import { CreatePlace } from "../components/CreatePlace"
import { ErrorMessage } from "../components/ErrorMessage"
import { Place } from "../components/Place"
import { Loader } from "../components/Loader"
import { Modal } from "../components/Modal"
import { SearchPlacesTab } from "../components/SearchPlacesTab"
import { ModalContext } from "../context/ModalContext"
import { usePlaces } from "../hooks/places"
import { IPlace } from "../models"

export function PlacesPage() {
    const {places, error, loading, addPlace, selectPlaces} = usePlaces()
    const {modal, open, close} = useContext(ModalContext)  
  
    const createHandler = (place: IPlace) => {
      close()
      addPlace(place)
    }

    const selectHandler = (selectedPlaces: IPlace[]) => {
      selectPlaces(selectedPlaces)
    }
  
    return (
      <div className="bg-[#01130c]">
        <div className="container-fluid">
          <SearchPlacesTab onSelect={selectHandler} />
        </div>
        <div className="container mx-auto max-w-2xl pt-5">
          { loading && <Loader /> }
          { error && <ErrorMessage error={error} /> }
          { places.map(place => <Place place={ place } key={ place.id } />) }
    
          { modal && <Modal title="Create new place" onClose={close}>
            <CreatePlace onCreate={createHandler} />
          </Modal>}
    
          <button
            className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
            onClick={open}
          >+</button>
        </div>
      </div>
    )
  }