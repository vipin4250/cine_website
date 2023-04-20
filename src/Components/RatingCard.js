import React from 'react'

export default function RatingCard({movie}) {
  return (
    <>
    <div className='_2_3'>
      <table className='_2_3_1'>
        <tr>
          <th className='_2_3_1_1'>no.</th>
          <th  className='_2_3_1_2'>
            <ul className='_2_3_1_2_1'>
              <li>image</li>
              <li>
                <ul>
                  <li>{movie.name}</li>
                  <li>{movie.date}</li>
                  <li>{movie.episodes}</li>
                  <li>{movie.members}</li>
                </ul>
              </li>
            </ul>
          </th>
          <th className='_2_3_1_3'>stars</th>
        </tr>
      </table>
    </div>
    </>
  )
}
