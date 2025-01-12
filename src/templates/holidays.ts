import { nanoid } from 'nanoid'

// month is zero-indexed!
export default [
  {
    id: nanoid(5),
    name: 'Examination session Summer 2022',
    start: new Date(2022, 7, 8, 0, 0),
    end: new Date(2022, 8, 2, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Knabenschiessen',
    start: new Date(2022, 8, 12, 0, 0),
    end: new Date(2022, 8, 12, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Christmas break',
    start: new Date(2022, 11, 24, 0, 0),
    end: new Date(2023, 0, 2, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Examination session Winter 2022/2023',
    start: new Date(2023, 0, 23, 0, 0),
    end: new Date(2023, 1, 17, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Week after Easter: no classes',
    start: new Date(2023, 3, 7, 0, 0),
    end: new Date(2023, 3, 16, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Sechseläuten',
    start: new Date(2023, 3, 17, 0, 0),
    end: new Date(2023, 3, 17, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Tag der Arbeit',
    start: new Date(2023, 4, 1, 0, 0),
    end: new Date(2023, 4, 1, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Auffahrt',
    start: new Date(2023, 4, 18, 0, 0),
    end: new Date(2023, 4, 18, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Pfingsten',
    start: new Date(2023, 4, 27, 0, 0),
    end: new Date(2023, 4, 29, 23, 59),
  },
  {
    id: nanoid(5),
    name: 'Examination session Summer 2023',
    start: new Date(2023, 7, 7, 0, 0),
    end: new Date(2023, 8, 1, 23, 59),
  },
]
