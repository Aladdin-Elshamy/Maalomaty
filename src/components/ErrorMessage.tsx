interface IProps {
    msg:string
}
export default function ErrorMessage({msg}:IProps) {
    return (
        msg ? <p className="text-red-500 mt-1 mb-4">{msg}</p> : null
    )
}