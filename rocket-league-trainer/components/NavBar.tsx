import Image from 'next/image'
import { Inter } from 'next/font/google'

interface NavBarProps {
    items: string[];    
};

export default function NavBar(props: NavBarProps) {
 return (
  <>
    <h1 className="">Rocket League Trainer</h1>
    <div>
	<span>Choose your mechanic</span>
	<nav>
		<ul>
            {
				props.items.map(thing => 
					<li key={thing}><button>{thing}</button></li>
 				)
			}
        </ul>
        </nav>
    </div>
   </>
 );
}

export {NavBar};