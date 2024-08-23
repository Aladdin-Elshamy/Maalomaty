import { ChangeEvent, FormEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { validateId } from "../validation";
import ErrorMessage from "./ErrorMessage";
import toast from "react-hot-toast";
import { extractInfoFromEgyptianID } from "../utilities";
import { IdentityDetails } from "../interfaces";
import { FaCheck } from "react-icons/fa";

interface IProps {
    setIdToParent: (idCardDetails: IdentityDetails) => void
}
export default function Input({setIdToParent} : IProps) {
    /* --------------------------------- States --------------------------------- */
    const [id,setId] = useState("");
    const [errors,setErrors] = useState("");
    /* -------------------------------- Handlers -------------------------------- */
    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        const {value} = e.target
        setId(value)
        setErrors("")
    }
    function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const error = validateId(id)
        const hasErrorMsg = error ? true : false
        if(hasErrorMsg){
            setErrors(error)
            return
        }
        setIdToParent(extractInfoFromEgyptianID(id))
        setId("")
        setErrors("")
        toast.success("تم البحث بنجاح", {
            position: "top-center",
            style: {
                background: "#5982AB",
                color: "#fff",
                borderRadius: "0.8rem",
                padding: "1rem",
                fontSize: "1.5rem",
            }
        })
    }
    return (
        <form className="w-full" onSubmit={onSubmitHandler}>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <IoSearchOutline className="w-8 h-8 font-bold text-gray-500 dark:text-[#878787]" />
                </div>
                <input type="search" id="default-search" className="text-md sm:text-xl block w-full p-4 ps-16 pr-8 text-gray-900 rounded-lg bg-[#F3F3F3] dark:placeholder-[#B8B8B8] dark:text-black focus:outline-none  text-right" 
                placeholder="رقم البطاقة ..." value={id} onChange={onChangeHandler}/>
                <button type="submit" className="hidden sm:block text-white absolute end-2.5 bottom-2 bg-[#5982AB] hover:bg-blue-800 focus:ring-4 focus:outline-nonefont-medium rounded-full text-md sm:text-xl font-bold px-8 py-2">إبحث</button>
                <button type="submit" className="block sm:hidden text-white absolute end-2.5 bottom-3.5 bg-[#5982AB] hover:bg-blue-800 focus:ring-4 focus:outline-nonefont-medium rounded-full text-xs font-bold px-2 py-2"><FaCheck /></button>
            </div>
            <ErrorMessage msg={errors}/>
        </form>
    )
}