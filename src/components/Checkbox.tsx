import * as CheckboxStg from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxStg.CheckboxProps {}
export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxStg.Root className='w-6 h6 p-[2px] bg-gray-800 rounded' {...props}>
            <CheckboxStg.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </CheckboxStg.Indicator>
        </CheckboxStg.Root>
    )
}