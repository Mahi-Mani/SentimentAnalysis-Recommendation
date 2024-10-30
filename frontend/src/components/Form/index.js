import React, { Component } from 'react';
import { Description, Field, Input, Label, Button } from '@headlessui/react';
import clsx from 'clsx'

function Form({ handleInputChange, handleClick }) {
    return (
        <div className="container mx-auto w-full max-w-md px-4">
            <Field>
                <Label className="text-sm/6 font-medium text-black">Movie Name</Label>
                <Description className="text-sm/6 text-black/50">Enter a movie name</Description>
                <Input
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                    )}
                    id="movieId"
                    name="movieName"
                    onChange={handleInputChange}
                />
            </Field>
            <br></br>
            <button
                type="button"
                class="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal 
                text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 
                focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 
                motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                onClick={handleClick}>
                SEARCH
            </button>
        </div>
    );
}

export default Form;