import React, { Component } from 'react';
import { Description, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx'

class Form extends Component {

    render() {
        return (
            <div className="w-full max-w-md px-4">
                <Field>
                    <Label className="text-sm/6 font-medium text-black">Movie Name</Label>
                    <Description className="text-sm/6 text-black/50">Enter a movie name, to see reviews.</Description>
                    <Input
                        className={clsx(
                            'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-black',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                        )}
                    />
                </Field>
            </div>
        );
    }
}

export default Form;