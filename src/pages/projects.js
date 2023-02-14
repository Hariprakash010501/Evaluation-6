import React from 'react'
import { projectData } from '@/Config/datas';
import Link from 'next/link';
import projStyle from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineStar, AiOutlineFolder } from 'react-icons/ai'
const Projects = () => {
  const router = useRouter();
  return (
    <div className={projStyle.gridarea} style={{ padding: '5px' }}>
      {projectData.map((data) => (
        <div className={projStyle.griditems} key={data.id}onClick={() => router.push(data.html_url)}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <AiOutlineFolder style={{ float: 'left' }} />
              <h3>{data.name}</h3>
            </div><br />
            <div>
              <BiGitRepoForked style={{ float: 'right' }} />
              <AiOutlineStar style={{ float: 'left' }} />
            </div>
            <div>
              <h5 style={{ float: 'left' }}>{data.stargazers_count}</h5>
              <h5 style={{ float: 'right' }}>{data.forks_count}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Projects;