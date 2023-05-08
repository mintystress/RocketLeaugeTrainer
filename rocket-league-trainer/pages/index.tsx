import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NavBar } from '../components/NavBar';

export default function Home() {
 return (
  <>
    <title>Rocket League Trainer</title>
    <h1 className="">Rocket League Trainer</h1>
    <div>
      <span>Choose your mechanic</span>
      <NavBar items={['Air Dribbles', 'Bounce', 'Dribbles']} />
    </div>
   </>
 );
}