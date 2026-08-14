"use client"
import Link from 'next/link';
import { INavLinkes } from '.';
import GlassLayout from './GlassLayout'
type Props = {
  Links: INavLinkes[];
  locale: string;
};
export default function MobileNavbar({ Links, locale }: Props) {
  return (
<nav className='w-full  fixed bottom-0 left-1/2 -translate-x-1/2 z-50'>

    <GlassLayout className="flex justify-between items-center px-2 ">
<div>
{Links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="w-full px-4 py-2 mx-2 font-semibold text-white cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
</div>
    </GlassLayout>
</nav>
  )
}
