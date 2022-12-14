import { Link, Image } from "@shopify/hydrogen"

export default function Card(){
  return(
    <Link to="/shop/products/cherry-bark-vanilla">
      <div className="grid gap-2 group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          <Image src='/images/product.jpg' width={460} height={555} className="object-cover mx-auto rounded-none aspect-4/5" alt="A cocktail made with Bittercube Bitters" />
          </div>
        <div className="flex justify-between">
          <div className="label">Bittercube</div>
          <div className="text-dark">$15.99</div>
        </div>
        <hr />

        <div className="flex items-center justify-between w-full gap-2 mx-auto label group">
          <p className="mb-0 font-bold tracking-widest uppercase">The starter's Trio</p>
          <div className="btn-arrow"></div>
        </div>
        <span className="transition duration-700 opacity-0 group-hover:opacity-100 group-hover:flex text-dark">Stainless steel, lorem ipsum</span>
      </div>
    </Link>
  )
}