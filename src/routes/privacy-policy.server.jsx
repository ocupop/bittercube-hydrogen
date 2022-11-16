import { Layout } from "../components/Layout.server"
import Arrow from '../components/animations/Arrow.client'
import PatternHero from "../components/headers/PatternHero.server"

const HeaderText = ("Privacy Policy")

export default function PrivacyPolicy() {

  return (
    <Layout>
      <PatternHero content={HeaderText} />
      <section>
        <div className="container flex flex-col max-w-5xl gap-6">
          <h2 className="mx-auto">Bittercube's Privacy Policy</h2>
          <div className="max-w-md mx-auto">
            <h2 className="text-xl h3">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
            <p>
              When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
              </p>
              <p>
              When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.

              </p><p>
              Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
              <div>
                <h2 className="text-xl h3">SECTION 2 - CONSENT</h2>
                <p>How do you get my consent? </p>
                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. </p>
                <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
                <p>How do I withdraw my consent?</p>
                <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at orders@bittercube.com or mailing us at: <br />Bittercube <br />4828 W Lisbon Ave, Milwaukee Wisconsin US 53210</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 3 - DISCLOSURE</h2>
                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 4 - SHOPIFY</h2>
                <p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and services to you.</p>
                <p>Your data is stored through Shopify’s data storage, databases and the general Shopify application. They store your data on a secure server behind a firewall.</p>
                <p>Payment: </p>
                <p>If you choose a direct payment gateway to complete your purchase, then Shopify stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted. </p>
                <p>All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers. </p>
                <p>For more insight, you may also want to read  <a className="inline" href="https://www.shopify.com/legal/terms">Shopify’s Terms of Service</a> or <a className="inline" href="https://www.shopify.com/legal/privacy">Privacy Statement </a>.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 5 - THIRD-PARTY SERVICES</h2>
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. </p>
                <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. </p>
                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. </p>
                <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. </p>
                <p>As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act. </p>
                <p>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
                  </p><p>Links </p>
                <p>When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 6 - SECURITY</h2>
                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. </p>
                <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 7 - COOKIES</h2>
                <p>Here is a list of cookies that we use. We’ve listed them here so you that you can choose if you want to opt-out of cookies or not. </p>
                <p>_session_id, unique token, sessional, Allows Shopify to store information about your session (referrer, landing page, etc). </p>
                <p>_shopify_visit, no data held, Persistent for 30 minutes from the last visit, Used by our website provider’s internal stats tracker to record the number of visits </p>
                <p>_shopify_uniq, no data held, expires midnight (relative to the visitor) of the next day, Counts the number of visits to a store by a single customer. </p>
                <p>cart, unique token, persistent for 2 weeks, Stores information about the contents of your cart. </p>
                <p>_secure_session_id, unique token, sessional </p>
                <p>storefront_digest, unique token, indefinite If the shop has a password, this is used to determine if the current visitor has access.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 8 - AGE OF CONSENT</h2>
                <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
              </div>
              <div>
                <h2 className="text-xl h3">SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h2>
                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. </p>
                <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
              </div>
              <div>
                <h2 className="text-xl h3">QUESTIONS AND CONTACT INFORMATION</h2>
                <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href="mailto:orders@bittercube.com" className="inline">orders@bittercube.com</a> or by mail at <br />
                Bittercube
                [Re: Privacy Compliance Officer]
                4828 W Lisbon Ave, Milwaukee, WI 53210
                </p>




              </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
