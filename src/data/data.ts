import card1 from "../assets/img/card/card1.jpg";
import card2 from "../assets/img/card/caed2.png";
import card3 from "../assets/img/card/card3.png";
import card4 from "../assets/img/card/card4.png";
import card5 from "../assets/img/card/card5.png";
import card6 from "../assets/img/card/card6.png";
import card7 from "../assets/img/card/card7.png";
import card8 from "../assets/img/card/card8.png";
import card9 from "../assets/img/card/card9.png";
import card10 from "../assets/img/card/card10.png";
import card11 from "../assets/img/card/card11.png";
import card12 from "../assets/img/card/card12.png";
import card13 from "../assets/img/card/card13.png";
import card14 from "../assets/img/card/card14.png";
import client1 from "../assets/img/client/cleint1.png";
import client2 from "../assets/img/client/client2.png";
import client3 from "../assets/img/client/client4.png";
import client4 from "../assets/img/client/client5.png";
import client5 from "../assets/img/client/client6.png";
import client6 from "../assets/img/client/client7.png";
import client7 from "../assets/img/client/client4.png";
import client8 from "../assets/img/client/client2.png";
import client9 from "../assets/img/client/client7.png";
import toursImg from "../assets/img/tour/tours4.png";
import toursImg2 from "../assets/img/tour/img.png";
import tourDetails from "../assets/img/tourDetails/tourdetails.png";
import tourDetails1 from "../assets/img/tourDetails/tourdetails1.png";
import tourDetails2 from "../assets/img/tourDetails/tourdetails2.png";
import tourDetails3 from "../assets/img/tourDetails/tourdetails3.png";

interface Card {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  count: number;
  discount: number;
  date: string;
  rate: number;
  category: string;
  tours: number;
  region: string;
  distance: number;
  btnText?: string;
  MainToursImg?: string;
  ToursImg1?: string;
  ToursImg2?: string;
  ToursImg3?: string;
}

export const CardData: Card[] = [
  {
    id: 1,
    image: card1,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "foreign",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 2,
    image: card2,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "Domestic",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 3,
    image: card3,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "foreign",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 4,
    image: card4,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "Domestic",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 5,
    image: card5,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "foreign",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 6,
    image: card6,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "Domestic",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 7,
    image: card7,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "foreign",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
  {
    id: 8,
    image: card8,
    title: "Venice, Rome & Milan",
    subtitle: "Karineside",
    count: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    rate: 4.9,
    category: "Domestic",
    tours: 142,
    region: "Europe",
    distance: 63,
    btnText: "Explore",
    MainToursImg: tourDetails2,
    ToursImg1: tourDetails3,
    ToursImg2: tourDetails1,
    ToursImg3: tourDetails,
  },
];

interface FilterCard {
  id: number;
  category: string;
  image: string;
  profileImg: string;
  title: string;
  subtitle: string;
  data: string;
  user: number;
}
export const FilterCard: FilterCard[] = [
  {
    id: 1,
    category: "Tips and Tricks",
    image: card9,
    profileImg: client1,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 2,
    category: "Exploring",
    image: card10,
    profileImg: client2,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 3,
    category: "Off Topic",
    image: card11,
    profileImg: client3,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 4,
    category: "Travel",
    image: card12,
    profileImg: client4,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 5,
    category: "Tips and Tricks",
    image: card13,
    profileImg: client5,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 6,
    category: "How to",
    image: card14,
    profileImg: client6,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 7,
    category: "Travel",
    image: card3,
    profileImg: client7,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 8,
    category: "Tips and Tricks",
    image: card2,
    profileImg: client8,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
  {
    id: 9,
    category: "How to",
    image: card7,
    profileImg: client9,
    title: "Convergent and divergent plate margins",
    subtitle: "Isabelle O'Conner",
    data: "25 May, 2021",
    user: 160,
  },
];
interface ToursCard {
  id: number;
  image: string;
  title: string;
  city: string;
  price: number;
  discount: number;
  date: string;
  category: string;
  rating: number;
  btnText?: string
}

export const ToursCard: ToursCard[] = [
  {
    id: 1,
    image: toursImg,
    title: "Venice, Rome & Milan",
    city: "Karineside",
    price: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    category: "sea",
    btnText: "Explore",

    rating: 4.9,
  },
  {
    id: 2,
    image: card12,
    title: "Venice, Rome & Milan",
    city: "Karineside",
    price: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    category: "mountains",
    btnText: "Explore",
    rating: 4.9,
  },
  {
    id: 3,
    image: card13,
    title: "Venice, Rome & Milan",
    city: "Karineside",
    price: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    category: "city",
    btnText: "Explore",
    rating: 4.9,
  },
  {
    id: 4,
    image: toursImg2,
    title: "Venice, Rome & Milan",
    city: "Karineside",
    price: 699,
    discount: 548,
    date: "Tue, Jul 20 - Fri, Jul 23",
    btnText: "Explore",
    category: "sea",
    rating: 4.9,
  },
];
interface Plans {
  day: number;
  title: string;
  desc: string;
}
export const plans: Plans[] = [
  {
    day: 1,
    title: "Departure",
    desc: "Lorem ipsum dolor sit amet...",
  },
  {
    day: 2,
    title: "The South Coast",
    desc: "Ornare proin neque tempus...",
  },
  {
    day: 3,
    title: "Optional Activities",
    desc: "More text here...",
  },
];
