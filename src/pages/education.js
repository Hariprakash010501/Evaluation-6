import React from 'react'
import profileData from '@/Config/datas';
const Education = () => {
  return (
    <div style={{ color: 'white', display: 'flex', padding: '5px', flexDirection: 'column' }}>
      {profileData.info.education.map((data) => (
        <div key={data.id} style={{ padding: '10px', textDecoration: 'none', margin: '5px', border: '1px solid white', boxShadow: '-2px 3px 1px 1px gray', gap: '10px', borderRadius: '1rem', width: '90%' }}>
          <h4>{data.title}</h4>
          <h5><li>{data.period}</li></h5>
        </div>
      ))}
    </div>
  )
}

export default Education;