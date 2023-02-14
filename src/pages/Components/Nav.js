import React from 'react'
import navStyle from '@/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import img from '@/images/picture.jpeg'
import { useRouter } from 'next/router';
export default function Nav() {
    const router = useRouter();
    return (
        <div className={navStyle.container}>
            <ul>
                <li><Link style={{ textDecoration: "none", color: "white" }} href="/">Hariprakash</Link></li>
                <li><Link style={{ textDecoration: "none", color: "white" }} href="/projects">Projects</Link></li>
                <li><Link style={{ textDecoration: "none", color: "white" }} href="/education">Experience</Link></li>
                <Image className={navStyle.pic} alt="hi" onClick={() => router.push("https://github.com/Hariprakash010501")} style={{ float: 'right', borderRadius: "50%" }} src={img} width={40} height={40} />
            </ul>
        </div>
    )
}