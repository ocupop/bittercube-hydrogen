import wordmark from '../../assets/wordmark.svg'
import { Link, Image } from "@shopify/hydrogen"
import SignUpForm from "./SignUpForm.client"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"


const navItems = [
  {'link': '/shop', 'label': 'Shop'},
  {'link': '/places', 'label': 'Places'},
  {'link': '/', 'label': 'Recipes'},
  {'link': '/', 'label': 'About'},
  {'link': '/', 'label': 'Find Us'},
  {'link': '/', 'label': 'Wholesale'},
  {'link': '/', 'label': 'Refund Policy'},
]


export default function Footer(){

  return(
    <footer className="bg-paper">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-6 lg:grid-cols-9 max-w-screen-2xl">
          <div className="flex flex-col items-center justify-between md:col-span-1 lg:col-span-4 lg:items-start">
            <Image src={wordmark} height={56} width={297} alt="Bittercube" className="w-11/12 lg:w-80"/>
            <div className="flex-col hidden gap-4 lg:flex">
              <p className="text-2xl label">Subscribe for Recipes, News & Events</p>
              <SignUpForm />
            </div>
          </div>
          <div className="w-7/12 mx-auto md:w-full md:col-span-3 lg:col-span-2 lg:pr-12">
            <ul className="flex flex-col justify-center">
              {navItems.map(item => {
                const {link, label, i} = item
                return (
                  <li className="w-full py-3 border-b-2 border-dark last:border-0" key={i}>
                    <Link to={ link } className="flex justify-between w-full gap-2 mx-auto label group">{ label }<div className="btn-arrow"></div></Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-between order-4 gap-6 text-center lg:order-3 md:col-span-4 lg:col-span-2">
              <div>
                <h6>Headquarters</h6>
                <p>4828 W Lisbon Ave<br />Milwaukee WI, 53210</p>
              </div>
              <div>
                <h6>APOTHECARY PHONE</h6>
                <a href="tel:4142076262" target="_blank">414.207.6262</a>
              </div>
              <div>
                <h6>GENERAL INQUIRIES</h6>
                <a href="mailto:info@bittercube.com" target="_blank">info@bittercube.com</a>
              </div>

          </div>
          <div className="order-2 col-span-1 text-center lg:order-last md:col-span-4 lg:col-span-1">
            <div>
              <h6>Follow us online</h6>
              <div className="flex items-center justify-center gap-4 mt-4 lg:flex-col">
                <a href="https://www.instagram.com/bittercube/" target="_blank" rel="noopener" className="transition hover:opacity-80">
                  <Image src={instagram} width="40" height="40" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/bittercubebitters/" target="_blank" rel="noopener" className="transition hover:opacity-80">
                  <Image src={facebook} width="40" height="40" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
           <div className="flex flex-col order-last gap-4 mx-auto text-center md:col-span-4 lg:hidden">
            <p className="text-2xl label">Subscribe for Recipes, News & Events</p>
            <SignUpForm />
          </div>
        </div>

      <div className="py-3 bg-dark">
        <div className="container py-0  max-w-[1800px] flex gap-6 tracking-wider uppercase text-white text-sm font-bold">
          <span>Bittercube • Copyright 2022 <span id="year"></span></span>
          <Link to="/" className="text-sm">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}