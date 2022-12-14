import { Link } from "@shopify/hydrogen"
import { HorizontalSeperator } from "@client"
// ----------------------------------------------------------------------

export default function Events() {
  return(
    <div className="py-12 section bg-dark">
        <div className="border-y-2 border-gold">
          <div className="container grid grid-cols-1 gap-48 md:gap-16 md:grid-cols-2 max-screen-xl">
            <div className="max-w-md mx-auto text-center">
              <span className="block mb-4 label">Online Cocktail Classes</span>
              <h2>Entertaining Education</h2>
              <p>Over the last few years, Bittercube has hosted online classes covering topics such as seasonal cocktails, coffee cocktails, and many others. The entire catalog of classes are available online.</p>
              <a target='_blank' href="https://www.crowdcast.io/bittercube" className="flex justify-between pt-4 mx-auto mt-10 border-t-2 w-fit lg:w-60 label group border-gold">Online Class Inquiry<div className="btn-arrow btn-arrow-gold"></div></a>
              <a target='_blank' href="https://www.crowdcast.io/bittercube" className="flex justify-between pt-4 mx-auto mt-10 border-t-2 w-fit lg:w-60 label group border-gold">Online Class Library<div className="btn-arrow btn-arrow-gold"></div></a>
            </div>
            <div className="max-w-md mx-auto text-center">
              <dl>
                <dt className="label">Event Types</dt>
                <div className="my-10 w-96">
                  <HorizontalSeperator />
                </div>
                <dd className="label">Tours</dd>
                <dd className="label">Tastings</dd>
                <dd className="label">Private Events</dd>
                <dd className="label">Cocktail classes</dd>
              </dl>
              <a href="https://www.crowdcast.io/bittercube" target="_blank" rel="noopener" className="mt-10 btn btn-action">Events Portal</a>
            </div>
          </div>
        </div>
      </div>
  )
}