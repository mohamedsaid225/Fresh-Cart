/* eslint-disable react/prop-types */
export default function BrandsItem({productInfo}) {
    let {name,image}=productInfo
  return <>
        <div className="border-2 border-gray-200 p-4 rounded-lg hover:shadow-xl duration-300 transition-shadow">
            <img className="w-full" src={image} alt="" />
            <h3 className="text-lg text-center font-semibold text-primary-700">{name}</h3>
        </div>
  
  </>
}
