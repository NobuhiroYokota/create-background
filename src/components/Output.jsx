import { useFormContext } from "./FormProvider";

export const Output =() => {
  const { jpName, engName, facultyName, departmentName, graduationYear, id } = useFormContext();

  console.log(jpName)
  return(
    <div>
    <p>名前（漢字）: {jpName}</p>
    <p>名前（ローマ字）: {engName}</p>
    <p>学部: {facultyName}</p>
    <p>学科: {departmentName}</p>
    <p>卒業年数: {graduationYear}</p>
    <p>X:id: {id}</p>
  </div>
  )
}

export default Output