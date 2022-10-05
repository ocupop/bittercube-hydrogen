import Carousel from 'better-react-carousel'
import { Image } from "@shopify/hydrogen"
import Card from "../global/Card.client"
import Arrow from "../global/icons/Arrow.client"

const RecommendedProducts = [
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
  {'label': 'Fancy Cocktail stir stick', 'manufacturer': 'William Sonoma','price': '15.99', 'description': 'Stainless steel, lorem ipsum', 'image': 'src/assets/bittercube-cocktail.jpg'},
]

const arrowLeft = () => (
  <span type="prev" className="absolute z-10 w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -left-10 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper">

  </span>
)
const arrowRight = () => (
  <span type="prev" className="absolute z-10 w-10 h-10 transition duration-300 transform rotate-45 -translate-y-1/2 rounded-none -right-10 top-1/2 bg-dark ring-offset-2 ring-1 ring-gold hover:bg-gold ring-offset-paper"></span>
)


export default function CardCarousel(){
  return(
    <section className="w-11/12 mx-auto">
      <Carousel cols={4} rows={1} gap={50} loop arrowLeft={arrowLeft} arrowRight={arrowRight}>
        {RecommendedProducts.map(item => {
          const {label, manufacturer, price, description, image } = item
          return(
            <Carousel.Item>
              <Card />
             </Carousel.Item>
          )
          })}


      </Carousel>
      </section>
  )
}