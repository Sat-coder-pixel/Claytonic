import homeImg from '../assets/homeimage.jpg'
import s6 from '../assets/s6.png'
import d3 from '../assets/d3.png'
import d1 from '../assets/d1.png'
const projects = [
  {
    id: '1',
    title: 'Double-storey Family Home',
    location: 'Castle Hill, NSW',
    img: d3,
    hero: d3,
    year: 2023,
    area: '4800 sqft',
    cost: 'AUD $1,200,000',
    desc: 'A contemporary double-storey designed for growing families.',
    features: ['4 Bedrooms', 'Outdoor Living Area', 'Solar PV Ready', 'Reverse-cycle AC'],
    stats: [
      { label: 'Built Area (sqft)', value: 4800 },
      { label: 'Bedrooms', value: 4 },
      { label: 'Completion (Months)', value: 18 },
    ],
    timeline: [
      { year: '2021 Q1', title: 'Design & Planning' },
      { year: '2021 Q4', title: 'Foundation & Structure' },
      { year: '2022 Q3', title: 'Interior & Finishes' },
      { year: '2023 Q2', title: 'Handover' },
    ],
  },
  
  {
    id: '3',
    title: 'Coastal Family Home',
    location: 'The Ponds, NSW',
  img: homeImg,
  hero: homeImg,
    year: 2024,
    area: '3000 sqft',
    cost: 'AUD $1,050,000',
    desc: 'Beachside family home with large terraces and a focus on natural ventilation and coastal living.',
    features: ['Close to coastline', 'Outdoor Deck', 'Cross Ventilation'],
    stats: [
      { label: 'Built Area (sqft)', value: 3000 },
      { label: 'Terrace Area (sqft)', value: 600 },
      { label: 'Completion (Months)', value: 14 },
    ],
    timeline: [
      { year: '2022 Q1', title: 'Site Prep' },
      { year: '2022 Q4', title: 'Structure' },
      { year: '2023 Q4', title: 'External Works' },
      { year: '2024 Q2', title: 'Handover' },
    ],
  },
  {
    id: '4',
    title: 'Single-storey Cottage',
    location: 'North Kellyville, NSW',
  img: s6,
  hero: s6,
    year: 2021,
    area: '1500 sqft',
    cost: 'AUD $780,000',
    desc: 'Single-storey cottage-style home with garden terraces and energy-efficient construction.',
    features: ['Garden Terraces', 'Energy-efficient Insulation', 'Timber Cladding'],
    stats: [
      { label: 'Built Area (sqft)', value: 1500 },
      { label: 'Bedrooms', value: 3 },
      { label: 'Completion (Months)', value: 12 },
    ],
    timeline: [
      { year: '2019 Q3', title: 'Design' },
      { year: '2020 Q2', title: 'Construction' },
      { year: '2021 Q1', title: 'Finishes' },
      { year: '2021 Q3', title: 'Client Handover' },
    ],
  },
  {
    id: '5',
    title: 'Modern Double-storey Residence',
    location: 'Strathfield, NSW',
    img: d1,
    hero: d1,
    year: 2022,
    area: '4200 sqft',
    cost: 'AUD $1,150,000',
    desc: 'A sleek modern double-storey residence designed for luxury and comfort, featuring open-plan living spaces and high-end finishes.',
    features: ['5 Bedrooms', 'Home Theatre', 'Smart Home Automation', 'Dual Garage'],
    stats: [
      { label: 'Built Area (sqft)', value: 4200 },
      { label: 'Bedrooms', value: 5 },
      { label: 'Completion (Months)', value: 16 },
    ],
    timeline: [
      { year: '2020 Q4', title: 'Architectural Design' },
      { year: '2021 Q2', title: 'Construction Begins' },
      { year: '2021 Q4', title: 'Interior Finishing' },
      { year: '2022 Q2', title: 'Project Completion' },
    ],
  },
]

export default projects
