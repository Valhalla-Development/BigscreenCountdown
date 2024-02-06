'use client'
import {useEffect} from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';

export default function Home() {
    useEffect(() => {
        flatpickr("#startTime", {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }, []);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-cerrnter text-2xl font-bold leading-9 tracking-tight text-white">
                        Bigscreen Countdown
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                IMDb Link
                            </label>
                            <div className="mt-2">
                                <input
                                    id="imdbLink"
                                    name="imdbLink"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="https://www.imdb.com/title/tt5116302"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="startTime" className="block text-sm font-medium leading-6 text-white">
                                    Start Time
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    id="startTime"
                                    name="startTime"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Start Countdown
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
