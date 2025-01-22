import PageHeader from "@/components/page-header";
export default function Layout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader className='my-8' />
      <main className="flex-grow">{children}</main>
      <footer className="bg-white rounded-lg  m-4 dark:bg-slate-950">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} <a href="/" className="hover:underline ">Budget IQ™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-500 me-4 md:me-6 p-2 rounded-sm text-md">About</a>
            </li>
            <li>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-500 me-4 md:me-6 p-2 rounded-sm text-md">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-500 me-4 md:me-6 p-2 rounded-sm text-md">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:bg-gray-200 dark:hover:bg-gray-500 p-2 rounded-sm text-md">Contact</a>
            </li>
          </ul>
          </div>
      </footer>

    </div>
  );
}
