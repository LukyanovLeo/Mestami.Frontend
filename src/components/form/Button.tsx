import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface ButtonProps{
    label: string
}

export function Button({ label }: ButtonProps) {
    return (
    <>
        <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">{ label }</button>
    </>
    )
  }