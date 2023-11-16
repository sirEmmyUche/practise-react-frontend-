import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../App.css'

function Home (){
    return(
        <header>
        <nav> 
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Scroll Type</Link>
                    <ul>
                        <li><Link to={'PaginatedPage'}>Pagination</Link></li>
                        <li><Link to={'PaginatedPage2'}>Pagination with npm package</Link></li>
                        <li><Link to={'RevealOnScroll'}>Reveal On Scroll</Link></li>
                        <li><Link>Infinite Scroll</Link></li>
                    </ul>
                </li>
                
                <li>
                    <Link>Product</Link>
                    <ul>
                        <li><Link>Product 1</Link></li>
                        <li><Link>Product 2</Link></li>
                    </ul>
                </li>
                <li>
                    <Link>Pricing</Link>
                    <ul>
                        <li><Link>Basic</Link></li>
                        <li><Link>Premium</Link></li>
                        <li><Link>Advance</Link></li>
                        <li><Link>Enterprise</Link></li>
                    </ul>
                </li>
                <li>
                    <Link>Get Started</Link>
                    <ul>
                        <li><Link>LogIn</Link></li>
                        <li><Link>SignUp</Link></li>
                    </ul>
                </li>
            </ul> 
        </nav>
        </header>
    )
}

export default Home;