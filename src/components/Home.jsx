import "./Home.css"
import { Link } from "react-router-dom"
import { Header } from "./Header";
import { useFormContext } from "./FormProvider";


export const Home = () => {

    const { jpName, setJpName, engName, setEngName, facultyName, setFacultyName, departmentName, setDepartmentName, graduationYear, setGradiationYear, id, setId } = useFormContext();


  return (
    <>
    <Header />
    <h1>必要な情報を入力してください</h1>
    <hr></hr>
    <div className="form">

      <div className="item1">
        <label className="form-name">名前（漢字）</label>
        <input className="input-form" type="text" value={jpName} onChange={(e) =>setJpName(e.target.value)}/>
      </div>
      <div className="item2">
        <label className="form-name">名前（ローマ字）</label>
        <input className="input-form" type="text" value={engName} onChange={(e) =>setEngName(e.target.value)}/>
      </div>
      <div className="item3">
        <label className="form-name">学部</label>
        <input className="input-form" type="text" value={facultyName} onChange={(e) =>setFacultyName(e.target.value)}/>
      </div>
      <div className="item4">
        <label className="form-name">学科</label>
        <input className="input-form" type="text" value={departmentName} onChange={(e) =>setDepartmentName(e.target.value)}/>
      </div>
      <div className="item5">
        <label className="form-name">卒業年数（例:26卒）</label>
        <input className="input-form" type="text" value={graduationYear} onChange={(e) =>setGradiationYear(e.target.value)}/>
      </div>
      <div className="item6">
        <label className="form-name">X:id</label>
        <input className="input-form" type="text" value={id} onChange={(e) =>setId(e.target.value)}/>
      </div>
      <Link   to={'./Output'}  className="button">
        Enter
      </Link>
    </div>
    </>
  )
}

export default Home