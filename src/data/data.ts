import maze from '../assets/images/logos/maze.svg'
import squarespace from '../assets/images/logos/squarespace.svg'
import classpass from '../assets/images/logos/classpass.svg'
import btn1 from '../assets/images/women/women-btn-1.png'
import btn2 from '../assets/images/women/women-btn-2.png'
import btn3 from '../assets/images/women/women-btn-3.png'
import btn4 from '../assets/images/women/women-btn-4.png'
import women1 from '../assets/images/women/women-1.png'
import women2 from '../assets/images/women/women-2.png'
import women3 from '../assets/images/women/women-3.png'
import women4 from '../assets/images/women/women-4.png'
import partnersLogo1 from '../assets/images/partners/partners-logo-1.png'
import partnersLogo2 from '../assets/images/partners/partners-logo-2.png'
import partnersLogo3 from '../assets/images/partners/partners-logo-3.png'
import partnersLogo4 from '../assets/images/partners/partners-logo-4.png'
import { splitWords } from '../library/Functions'
import item1 from '../assets/images/block/block-2/item-1.png'
import item2 from '../assets/images/block/block-2/item-2.png'
import item3 from '../assets/images/block/block-2/item-3.png'
import item4 from '../assets/images/block/block-2/item-4.png'
import item5 from '../assets/images/block/block-2/item-5.png'
import item6 from '../assets/images/block/block-2/item-6.png'
import blockbtn1 from '../assets/images/workforce/block-1/btn-1.png'
import blockbtn2 from '../assets/images/workforce/block-1/btn-2.png'
import blockbtn3 from '../assets/images/workforce/block-1/btn-3.png'
import blockbtn4 from '../assets/images/workforce/block-1/btn-4.png'
import block2btn1 from '../assets/images/workforce/block-2/btn-1.png'
import block2btn2 from '../assets/images/workforce/block-2/btn-2.png'
import block2btn3 from '../assets/images/workforce/block-2/btn-3.png'
import block2btn4 from '../assets/images/workforce/block-2/btn-4.png'
import block2btn5 from '../assets/images/workforce/block-2/btn-5.png'


export const navigation = [
  { id: 1, title: 'About' },
  { id: 2, title: 'Service' },
  { id: 3, title: 'Customers' },
  { id: 4, title: 'Articles' }
]

export const noon = [
  { id: 1, title: 'N', x: -100 },
  { id: 2, title: 'o', x: -50 },
  { id: 3, title: 'o', x: 50 },
  { id: 4, title: 'n', x: 100 }
]

export const logos = [
  { id: 1, img: maze },
  { id: 2, img: squarespace },
  { id: 3, img: classpass },
  { id: 4, img: maze },
  { id: 5, img: squarespace },
  { id: 6, img: classpass },
  { id: 7, img: maze },
  { id: 8, img: squarespace },
  { id: 9, img: classpass },
  { id: 10, img: maze },
  { id: 11, img: squarespace },
  { id: 12, img: classpass },
  { id: 13, img: maze },
  { id: 14, img: squarespace },
  { id: 15, img: classpass },
  { id: 16, img: maze },
  { id: 17, img: squarespace },
  { id: 18, img: classpass },
]

export const headCards = [
  { id: 1, name: 'Vicki Tung', btn: btn1, img: women1 },
  { id: 2, name: 'Vicki Tung', btn: btn2, img: women2 },
  { id: 3, name: 'Vicki Tung', btn: btn3, img: women3 },
  { id: 4, name: 'Vicki Tung', btn: btn4, img: women4 },
  { id: 5, name: 'Vicki Tung', btn: btn1, img: women1 },
  { id: 6, name: 'Vicki Tung', btn: btn2, img: women2 },
  { id: 7, name: 'Vicki Tung', btn: btn3, img: women3 },
  { id: 8, name: 'Vicki Tung', btn: btn4, img: women4 },
]

export const titleItems = [
  {
    title: splitWords("Meet the first version of Noon - the world's"),
    span1: splitWords("first autonomous sourcer"),
    description: "An AI employee that performs the end-to-end role of a talent sourcer",
    center: true,
  },
  {
    title: splitWords("Welcome to the era of"),
    span1: splitWords("autonomous"),
    span2: splitWords("recruiters"),
    description: "AI that does jobs, not tasks",
    center: true,
    btn: "Talk To An AI Expert"
  },
  {
    title: splitWords("Unprecedented"),
    span1: splitWords("Intelligence"),
    description: "Noon consistently outperforms human experts on diverse sets of challenging sourcing tasks requiring multi-step reasoning.",
    btn: "Show Me How"
  },
  {
    title: splitWords("Empathetic"),
    span1: splitWords("and Human"),
    description: "Noon is trained on your unique writing style, capturing your voice and tone with remarkable accuracy.",
    btn: "Show Me How"
  },
  {
    title: splitWords("Rapidly"),
    span1: splitWords("Learns"),
    description: "Noon improves its capabilities with each user interaction through Reinforcement Learning from Human Feedback (RLHF).",
    btn: "Show Me How"
  },
  {
    title: splitWords("Build an"),
    span1: splitWords("AI Workforce"),
    description: "An elastic recruiting team that scales with your hiring needs",
    center: true,
  },
  {
    title: splitWords("Hear it from our"),
    span1: splitWords("customers"),
    center: true,
  },
]

export const customersArticle = splitWords("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.")

export const meetItems = [
  {
    id: 1,
    title: "Understanding",
    description: "Collaborates with hiring managers to understand specific job skills and requirements",
    percent: 27,
  },
  {
    id: 2,
    title: "Sourcing",
    description: "Searches candidates across the web and evaluates candidate profiles using your specific criteria",
    percent: 32,
  },
  {
    id: 3,
    title: "Engagement",
    description: "Sends multi-channel, personalized campaigns and cultivates relationships with candidates for current/prospective positions",
    percent: 23,
  },
  {
    id: 4,
    title: "Calibration",
    description: "Adapts and learns from hiring manager feedback on the quality of sourced candidates",
    percent: 18,
  },
]

export const partners = [
  { id: 1, logo: partnersLogo1, name: "Warner Bros", description: "How To Build Diverse Teams" },
  { id: 2, logo: partnersLogo2, name: "Novartis", description: "How To Hire Top Talent" },
  { id: 3, logo: partnersLogo3, name: "JCPenny", description: "How To Improve Candidate Experience" },
  { id: 4, logo: partnersLogo4, name: "Carvana", description: "How To Promote Inclusive Hiring Practices" },
  { id: 5, logo: partnersLogo1, name: "Warner Bros", description: "How To Build Diverse Teams" },
  { id: 6, logo: partnersLogo2, name: "Novartis", description: "How To Hire Top Talent" },
  { id: 7, logo: partnersLogo3, name: "JCPenny", description: "How To Improve Candidate Experience" },
  { id: 8, logo: partnersLogo4, name: "Carvana", description: "How To Promote Inclusive Hiring Practices" },
]

export const itemsBlock2 = [
  { id: 1, img: item1 },
  { id: 2, img: item2 },
  { id: 3, img: item3 },
  { id: 4, img: item4 },
  { id: 5, img: item5 },
  { id: 6, img: item6 },
]

export const blockButtons = [
  { id: 4, img: blockbtn1 },
  { id: 3, img: blockbtn2 },
  { id: 2, img: blockbtn3 },
  { id: 1, img: blockbtn4 },
]

export const blockButtons2 = [
  { id: 5, img: block2btn1 },
  { id: 4, img: block2btn2 },
  { id: 3, img: block2btn3 },
  { id: 2, img: block2btn4 },
  { id: 1, img: block2btn5}
]
