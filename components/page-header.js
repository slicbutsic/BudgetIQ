import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'
import useServerDarkMode from '@/hooks/use-server-dark-mode'

export default function PageHeader({className}) {
  const theme = useServerDarkMode();
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link href='/dashboard' className='text-xl hover:underline underline-offset-8 decoration-2'>
        Wealth IQ
      </Link>
      <div className='flex items-center space-x-4 ml-96'>
        <DarkModeToggle default={theme} />
        <div>User Dropdown here</div>
      </div>
    </header>
  )
}
