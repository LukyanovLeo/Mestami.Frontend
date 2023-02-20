interface TextFieldProps {
    label: string
    value: string
    onChange: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export function TextField({ label, value, onChange }: TextFieldProps) {
    return (
    <>
        <label>{label}</label>
        <input 
            type="text"
            name="title"
            className="border py-2 px-4 mb-2 w-full outline-0"
            placeholder="Enter product title..."
            value={value}
            onChange={onChange}>
        </input>
    </>
    )
  }