interface IProps {
    type: string
    info: string
    image: string
}
export default function InfoCard({type, info, image}:IProps) {
    return (
        <div className="bg-[#F4F4F4] p-5 pb-0 rounded-xl max-h-52">
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 border-b-2 border-[#00000021] pb-3">
                    <div className="bg-[#82B8A1] p-3 rounded-full"><img src={image} className="block w-5 h-5" alt=""/></div>
                    <span className="font-bold text-[#797979] text-lg">
                        {type}
                    </span>
                </div>
                <div className="flex justify-center items-center text-[#494949] font-bold text-3xl py-12 text-center">
                    <p>{info}</p>
                </div>
            </div>
        </div>
    )
}