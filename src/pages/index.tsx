import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  const goToSampleEditor = useCallback(() => {
    router.push('/editor')
  }, [router])

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                <span className="block xl:inline">React Flow</span>{' '}
                <span className="block text-[#38B5AD] xl:inline">
                  tkcel Tutorial
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                このレポジトリは「React
                Flow」のサンプルページです。記事については
                <a
                  href="https://zenn.dev/tkcel/articles/637837eee794f7"
                  className="text-[#38B5AD]"
                >
                  こちら
                </a>
                を参照ください。
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <button
                  onClick={goToSampleEditor}
                  type="button"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  サンプルエディタに移動
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center w-full h-full">
    //   <button
    //     onClick={goToSampleEditor}
    //     type="button"
    //     className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    //   >
    //     サンプルエディタに移動
    //   </button>
    // </div>
  )
}

export default Home
