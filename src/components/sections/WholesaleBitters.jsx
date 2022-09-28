import illustraion from '../../assets/wholesale-illustration.svg';
import { Link, Image } from "@shopify/hydrogen"

export default function WholesaleBitters(){
  return(
    <section className="relative bg-paper">
      <div className="absolute inset-0">
        <Image src={illustraion} width={1388} height={367} alt="" role="presentation" className="object-contain w-full h-full" />
      </div>
      <div className="container relative text-center">
        <h2>Wholesale Bittercube</h2>
        <h3>For bartenders & Managers</h3>
        <Link to="/" className="btn btn-action bg-paper">Shop Wholesale</Link>
      </div>
    </section>
  )
}