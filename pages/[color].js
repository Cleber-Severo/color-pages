import React from 'react'
import colors from '../data/colors.json'
import Link from 'next/link';

console.log(colors);

export default function Color ({ color }) {
    return <div className='color-page' style={{ backgroundColor: color.hex  }}>
        <h1> {color.name} </h1>
        <Link href={"/"} >
            <span>Home</span>
        </Link>
    </div>
}

export async function getStaticPaths() {
    const paths = colors.map( color => {
        return {
            params: {color: color.name}
        }
    })
    return { paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const color = colors.find(color =>  color.name == params.color )
    return { props: { color } }
}