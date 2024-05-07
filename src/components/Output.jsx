import { useEffect, useRef } from "react";
import { useFormContext } from "./FormProvider";
import "./Output.css"
import { Header } from "./Header";
import { Link } from "react-router-dom";


export const Output = () => {
  const { jpName, engName, facultyName, departmentName, graduationYear, id } = useFormContext();
  const canvasRef= useRef(null);

  useEffect (() => {

    const canvas = canvasRef.current;
    const context001 = canvas.getContext("2d")

    context001.fillStyle="#ffffff"
    context001.fillRect(0,0,1920,1080)

    context001.fillStyle="#000000"
    context001.font="70px serif";
    context001.fillText(""+jpName,100,200)

    context001.font="50px serif"
    context001.fillText(""+engName,100,130)

    context001.font="50px serif"
    context001.fillText(""+facultyName,100,270)

    context001.font="50px serif"
    context001.fillText(""+departmentName,100,320)

    context001.font="40px serif"
    context001.fillText(""+graduationYear,100,800)

    context001.font="50px serif"
    context001.fillText("X:@"+id,100,860)


  },[jpName,engName,facultyName,departmentName,graduationYear, id])

  const handleSaveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "template.png";
    link.click();
  };




  return (
    <>
    <Header/>
    <div className="circle">
    <canvas ref={canvasRef} style={{width:"500px", height:"300px"}} width={1920} height={1080}></canvas>
    <button id="button" onClick={handleSaveImage}>保存</button>
    </div>
    <div className="center">
      <Link to={"/"} className="totop">topへ戻る</Link>
    </div>
    </>
  )
};