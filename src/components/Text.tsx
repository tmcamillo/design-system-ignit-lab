import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'md', children, asChild }: TextProps) { //desestructuring props and setting a default value
    const Comp = asChild ? Slot : 'span'; //Slot pass all atributes of Comp direct to first tag passed on asChild
    return (
        <Comp className={
            clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )
            }>{children}
        </Comp>
    )
}