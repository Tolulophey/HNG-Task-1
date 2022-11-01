import React from 'react'

function LInks() {
const data = [
    {
        "id": "btn__zuri",
        "name": "Zuri Team",
        "link": "https://training.zuri.team/"
    },
    {
        "id": "books",
        "name": "Zuri Books",
        "link": "http://books.zuri.team/"
    },
    {
        "id": "book__python",
        "name": "Python Books",
        "link": "https://books.zuri.team/python-for-beginners?ref_id=Tolulophey"
    },
    {
        "id": "pitch",
        "name": "Background Check for Coders",
        "link": "https://background.zuri.team/"
    },
    {
        "id": "book__design",
        "name": "Design Books",
        "link": "https://books.zuri.team/design-rules"
    }
]
  return (
    <div className='links'>
        {
            data.map((item,index)=>{
                return <a href={item.link} id={item.id} key={index+1}>{item.name}</a>
            })
        }
    </div>
  )
}

export default LInks