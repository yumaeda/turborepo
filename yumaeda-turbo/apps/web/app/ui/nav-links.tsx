'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
        <ul>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className={`link ${pathname === '/ranking' ? 'active' : ''}`}
                    href="/ranking"
                >
                    Ranking
                </Link>
            </li>
            <li>
                <Link
                    className={`link ${pathname === '/geolocation' ? 'active' : ''}`}
                    href="/geolocation"
                >
                    Geolocation
                </Link>
            </li>

        </ul>
    </nav>
  )
}
