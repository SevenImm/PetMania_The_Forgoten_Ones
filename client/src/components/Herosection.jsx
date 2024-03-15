
export default function Herosection() {
  return (
        <div className="py-24 sm:py-32 lg:pb-40 bg-gradient-to-b from-sky-500 from-10% via-green-700 via-90% to bg-yellow-700">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Share your Journey together
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pawmania is the ultimate social media pet app, bringing pet lovers together in a vibrant online community where you can connect with like-minded enthusiasts. With a pet-friendly interface and a paw-some array of features, Pawmania is the go-to social media platform if you have a furry friend.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/signup"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/iStock-1324099927.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
  )
}