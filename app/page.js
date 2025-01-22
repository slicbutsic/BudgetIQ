import Image from 'next/image';
import DarkModeToggle from '@/components/dark-mode-toggle';
import Button from '@/components/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-12 py-10 max-w-[1920px]">

      {/* Header section */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold">Budget IQ</h1>
          <h5 className="mt-1 text-lg md:text-xl lg:text-2xl xl:text-3xl">Smarter finances, brighter futures.</h5>
        </div>
        <DarkModeToggle />
      </div>

      {/* Main content section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Text content on the left */}
        <div className="mt-1 lg:w-1/2 mb-8 lg:mb-0 lg:pr-16 xl:pr-24">
          <p className="text-gray-800 dark:text-gray-300 mb-6 md:text-lg lg:text-lg xl:text-lg">
          Budget IQ is a powerful personal finance app designed to transform how
          you manage and understand your money. It offers intelligent tracking,
          insightful analytics, and user-friendly tools to help you take control of your financial journey.
          </p>

          <Link href="/login">
            <Button variant='outline' className="w-full">
              <div className="text-black dark:text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-8 xl:py-4 text-lg lg:text-xl xl:text-2xl rounded-lg transition-colors">
                Get Started
              </div>
            </Button>
          </Link>
        </div>

        {/* Images on the right */}
        <div className="lg:w-1/2 relative w-full max-w-[600px] lg:max-w-[1200px] xl:max-w-[1600px] 2xl:max-w-[2000px]">
          <Image
            src="/images/budget-iq-web.png"
            alt="App dashboard view in web"
            width={2000}
            height={1000}
            layout="responsive"
            priority
            quality={50}
            className="rounded-lg object-cover"
          />

          {/* Smaller overlaid image */}
          <div className="absolute bottom-[0%] right-[0%] w-[40%] lg:w-[35%] xl:w-[30%]">
            <Image
              src="/images/budget-iq-mobile.png"
              alt="App dashboard view in mobile"
              width={1000}
              height={900}
              layout="responsive"
              priority
              quality={50}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
