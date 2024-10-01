import { Meta, StoryObj } from '@storybook/react'
import { Students } from './Students'
import React from 'react'
import { v1 } from 'uuid'

const meta: Meta<typeof Students> = {
  component: Students,
}

export default meta

type Story = StoryObj<typeof Students>

export const FirstStory: Story = {
  args: {
    students: ['Rick Kane', 'Finnlay Bentley', 'Samia North', 'Isaac Morton'],
  },
}

const todo = [
  {
    title: 'What to learn',
    filter: 'all',
    tasks: [
      { taskId: v1(), title: 'HTML&CSS', isDone: true },
      { taskId: v1(), title: 'JS', isDone: true },
    ],
    students: [
      'Rick Kane',
      'Finnlay Bentley',
      'Samia North',
      'Isaac Morton',
      'Lily-Ann Clifford',
      'Thalia Park',
      'Sapphire Cruz',
      'Cieran Vazquez',
      'Anya Estes',
      'Dominika Field',
      'Rosanna Chung',
      'Safiyah Davey',
      'Ryley Beasley',
      'Kalvin Trejo',
      'Evie-Mae Farrell',
      'Juliet Valencia',
      'Astrid Austin',
      'Lyle Montgomery',
      'Nisha Mora',
      'Kylie Callaghan',
      'Star Wilks',
      'Marissa Colley',
      'Asa Fuller',
      'Leigh Kemp',
      'Avleen Dawson',
      'Sammy Bonilla',
      'Acacia Becker',
      'Coral Shepherd',
      'Melina Molina',
      'Kiran Bailey',
      'Clara Escobar',
      'Alexandru Horn',
      'Brandon-Lee Mercado',
      'Elouise Weston',
      'King Long',
      'Kerri Searle',
      'Kanye Hamer',
      'Elwood Benitez',
      'Mikail Whitaker',
      'Bobby Hardy',
      'Talha Ferry',
      'Priscilla Landry',
      'Olivia-Grace Cain',
      'Kiaan Wallace',
      'Wesley Padilla90',
      'Ella-Grace Wooten91',
      'Kaif Molloy92',
      'Kamal Broadhurst93',
      'Bianca Ferrell94',
      'Micheal Talbot95',
    ],
  },
  {
    title: 'What to do',
    filter: 'all',
    tasks: [
      { taskId: v1(), title: 'HTML&CSS2', isDone: true },
      { taskId: v1(), title: 'JS2', isDone: true },
    ],
    students: [
      'Jago Wormald1',
      'Saul Milne2',
      'Aariz Hester3',
      'Dion Reeve4',
      'Anisa Ortega5',
      'Blade Cisneros6',
      'Malaikah Phelps7',
      'Zeeshan Gallagher8',
      'Isobella Vo9',
      'Rizwan Mathis10',
      'Menaal Leach11',
      'Kian Walton12',
      'Orion Lamb13',
      'Faizah Huynh14',
      'Crystal Vaughan15',
      'Vivien Hickman16',
      'Stuart Lu17',
      'Karol Davison18',
      'Dario Burns19',
      'Chloe Rich20',
      'Martyna Felix',
      'Nida Glass',
      'Maeve Miles',
      'Hasnain Puckett',
      'Ayman Cano',
      'Safwan Perry',
      'Fox Kelly',
      'Louise Barlow',
      'Malaki Mcgill',
      'Leanna Cline',
      'Willard Hodge',
      'Amelia Dorsey',
      'Kiah Porter',
      'Jeanne Daly',
      'Mohsin Armstrong',
      'Laurie Rangel',
      'Princess Tierney',
      'Kasim Kendall',
      'Darryl Cope',
      'Elysha Ray',
      'Liyana Harris',
      'Kashif Blackburn',
      'Atif Zimmerman',
      'Sila Hartley',
      'Ralphie Hebert',
    ],
  },
]

export const StudentsHaveMap = () => {
  return (
    <div>
      {todo.map((tl, index) => (
        <Students key={index} {...tl} />
      ))}
    </div>
  )
}

export const StudentsNothingMap = () => {
  const checkTodo = todo.map((tl, index) => {
    return null
  })

  const hasStudents = todo.some((tl) => tl.students.length > 0)

  return <div>{<span>Nothing</span>}</div>
}
