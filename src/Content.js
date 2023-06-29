import { useEffect, useState } from "react"

function Content(){
    const [avt,setAvt] = useState()
    useEffect(()=>{
        //cleanup function
        //remove avtpreview
        return ()=>{
            avt&& URL.revokeObjectURL(avt.preview)
        }
    },[avt])
    const handleAvtPre = (e) =>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvt(file)
    }
    return (
        <div className="wrap">
            <input
            type="file"
            onChange={handleAvtPre}
            />
            {avt && <img src={avt.preview} width="300px" alt="..."/>}
        </div>
    )
}
export default Content