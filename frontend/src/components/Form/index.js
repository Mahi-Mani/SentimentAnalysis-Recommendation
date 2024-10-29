import React, { Component } from 'react';
import { Description, Field, Input, Label, Button } from '@headlessui/react';
import clsx from 'clsx'

function Form({handleInputChange}) {
        return (
            <div className="container mx-auto w-full max-w-md px-4">
                <Field>
                    <Label className="text-sm/6 font-medium text-black">Movie Name</Label>
                    <Description className="text-sm/6 text-black/50">Enter a movie name, to see reviews.</Description>
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
                <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-black data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Submit
                </Button>
            </div>
        );
}

export default Form;