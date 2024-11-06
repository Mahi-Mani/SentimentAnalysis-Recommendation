import { React, Component } from "react";
import { Button } from '@headlessui/react';
import { Link } from 'react-router-dom';

function List({ title, overview, imageSrc, index, movieId, backdrop }) {
    return (
        <>
            <br></br>
            {index % 2 == 0 ?
                <div
                    className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark container m-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    <div>
                        {/* Column1 */}
                    </div>
                    <div
                        className="relative overflow-hidden col-span-1"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img
                            className="rounded-t-lg"
                            src={imageSrc}
                            width={200} height={200}
                            alt="Movie poster" />
                    </div>
                    <div className="p-6 text-surface dark:text-white">
                        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
                        <p className="mb-4 text-base">
                            {overview}
                        </p>
                        <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-black data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                            <Link to="/reviews" state={{ title: title, movieId: movieId, backdrop: backdrop }}>
                                View Reviews
                            </Link>
                        </Button>
                    </div>
                    <div>
                        {/* Column2 */}
                    </div>
                </div>
                :
                <div
                    className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark container m-auto grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
                    <div>
                        {/* Column1 */}
                    </div>
                    <div className="p-6 text-surface dark:text-white">
                        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
                        <p className="mb-4 text-base">
                            {overview}
                        </p>
                        <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-black data-[hover]:bg-sky-500 data-[active]:bg-sky-700" id={movieId}>
                            <Link to="/reviews" state={{ movieId: movieId, backdrop: backdrop }}>
                                View Reviews
                            </Link>
                        </Button>
                    </div>
                    <div
                        className="relative overflow-hidden col-span-1"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        <img
                            className="rounded-t-lg"
                            src={imageSrc}
                            width={200} height={200}
                            alt="Movie poster" />
                    </div>
                    <div>
                        {/* Column2 */}
                    </div>
                </div>
            }

        </>
    )
}

export default List;