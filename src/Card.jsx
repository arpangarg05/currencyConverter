import React from 'react'

export default function Card(props) {
  return (
<div className={`flex justify-center ${props.className}`}>
        <div className=' w-2/5 rounded-lg bg-white  '>
            <div className='p-4 flex justify-between'>
                <h1 className='text-gray-500 text-xl font-light'>{props.status}</h1>
                <h1 className='text-gray-500 text-xl font-light'>Currency Type</h1>
            </div>
            <div className='flex justify-between p-4 pb-5'>
                <input type="text" className=" outline-none" value={props.value}  onChange={(e)=>{props.changeFromVal(e.target.value)}}/>
                <select id="currency" className="outline-none" value={props.def ? props.def:"usd"}  onChange={(e)=>{props.changeSet(e.target.value)}} name="currency">
                    {props.list ? props.list.map((e)=> <option key={e} value={e}>{e}</option>) : <option value=""></option>}
                </select>
            </div>
        </div>    
</div>
  )
}
