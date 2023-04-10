import React from "react"


interface PlaceContainerProps {
    children: React.ReactNode[]
}

export function PlaceContainer({children}: PlaceContainerProps) {
    return (
        <>
            { children.map((_, index) => 
                index % 3 === 0 && index !== 0
                ?
                    <div className="flex w-screen grid grid-cols-3 gap-5 min-h-full">
                        <div className="w-full">{children[index-2]}</div>
                        <div className="w-full">{children[index-1]}</div>
                        <div className="w-full">{children[index]}</div>
                    </div>
                : <></>                
            )}
        </>
    )
  }