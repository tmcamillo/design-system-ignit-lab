import { Text, TextProps } from './Text'
import { Meta, StoryObj } from '@storybook/react' //intellisence enable to objects

export default {
    title: 'Components/Text',
    component: Text,
    args: { //same as props on react
        children: 'Lorem Ipsum',
        size: 'md'
    } ,
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export  const Default: StoryObj<TextProps> = {}

export  const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export  const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export  const CustomComp: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes: { //remove children from table on storiesbook
        children: {
            table: {
                disable: true
            }
        }
    }
}