import React from "react"
import Layout from "../components/layout"
import TextBlock from "../components/TextBlock/textBlock"
import Button from "../components/Button/button"
import Packages from "../components/Packages/packages"
import Package from "../components/Package/package"
import Contact from "../components/Contact/contact"
import { Link } from "react-scroll"

import { IconContext } from "react-icons"
import { MdDone, MdClear } from "react-icons/md"

export default () => (
  <>
    <Layout>
      <TextBlock
        id="about"
        title="Our Services"
        paragraph="We are a small family run organisation that would like to cater to your logistics need. Headquartered in Chennai, our organisation also has a branch in Coimbatore. Personalised service is our priority. Our belief in the “Human Touch”is strong. This means that your interaction with a robotic voice will be minimised. Any queries and we are just a call away."
      >
        <Link to="perks" smooth={true} duration={500}>
          <Button label="Tell Me More" cta="Tell Me More!" />
        </Link>
      </TextBlock>

      <Packages
        title="Isha Cabs & Logistics"
        para="How we differ is by how we deliver! Expect a personalized and comfortable experience with us."
      >
        <IconContext.Provider
          value={{
            color: "#7FFF00",
            size: "1.2em",
            style: { verticalAlign: "middle", marginRight: "5px" },
          }}
        >
          <Package title="Our Vision">
            <ul>
              <li>
              <b>“It’s the little details that are vital. Little things make big things happen”</b>
              Everything big started out small. Our vision is not to be the biggest out there - but to be the best.
              We believe in a 100% in everything that we do – 100% success rate. 100% Customer satisfaction. 100% in everything.
              We strive to achieve equality in the society. One of our founding and most important person in the organisation is a woman. We would like our company to be a role model for the society.
              </li>
            </ul>
          </Package>
          <Package title="Our Mission">
            <ul>
              <li>
              Our Mission is to provide personalised service to our customers. 
              We would like to make our service as human as possible with little or no robotic interference.We believe in Quality over Quantity. A 100% customer satisfaction rate is our primary driving motive.
              </li>
            </ul>
          </Package>
          <Package title="Our History">
            <ul>
              <li>
              Apart from the packers and movers, we also help move any kind of goods from Chennai and Coimbatore to anywhere in Tamil Nadu.
              </li>
            </ul>
          </Package>
        </IconContext.Provider>
      </Packages>
      <Contact
        id="contact"
        title="Contact Isha Cabs & Logistics today"
        subtitle="Every second counts when you're looking to solve your transportation need. Drop us a message and one of our representatives will be in contact"
      />
    </Layout>
  </>
)
