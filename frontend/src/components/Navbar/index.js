import React, { Component } from 'react';

function Navbar({ page, backdrop }) {
  console.log(`http://image.tmdb.org/t/p/w500${backdrop}`)
  return (
    <>
      {page == "homepage" ?
        <div
          className="relative h-[400px] overflow-hidden rounded-lg bg-[url('https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-thumb.jpg')] bg-cover bg-no-repeat p-12 text-center text-white">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Movie Reviews & Recommendations</h2>
                <h4 className="mb-6 text-xl font-semibold">Search for a movie to begin!</h4>
              </div>
            </div>
          </div>
        </div>
        :
        <div
          className={`relative h-[400px] overflow-hidden rounded-lg bg-[url(http://image.tmdb.org/t/p/w500${backdrop})] bg-cover bg-no-repeat p-12 text-center text-white`}>
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h2 className="mb-4 text-4xl font-semibold">Movie Reviews & Recommendations</h2>
                <h4 className="mb-6 text-xl font-semibold">Positive: 0 <br></br>
                  Negative: 0</h4>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Navbar;