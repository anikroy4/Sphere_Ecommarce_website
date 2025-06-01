import React from 'react'
import Container from  "../../layers/Container"
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import { Link } from 'react-router-dom'
import TelephoneIcon from '../../../icons/TelephoneIcon'
import EmailIcon from '../../../icons/EmailIcon'


const Footer = () => {
  return (
    <>
      <Container className="flex  items-start justify-space justify-between mt-[73px] mb-[80px] ">
        <div className='pt-[5px]' >
          <img  src="/images/footericon.png" alt="footericon.png" />
          <p className='mt-[57px] w-[381px] font-["Montserrat"] font-normal text-lg leading-[155%] text-[#000] '>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
        </div>

        
        <div >
          <h4 className='text-black font-["Montserrat"] text-[22px] !font-extrabold leading-[160%]  no-ligatures'>Company</h4>
          <List className="">
            <ListItem className="my-[13px] text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures " ListInnerItem= "About Us"/>

            <ListItem className="my-[13px] text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures" ListInnerItem= "Products Digital"/>
          
            <ListItem className="text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures" ListInnerItem= "Customer Review"/>
          </List>

        </div>

        <div >
          <h4 className='text-black font-["Montserrat"] text-[22px] !font-extrabold leading-[160%]  no-ligatures'>Information</h4>
          <List className="">
            <ListItem className="my-[13px] text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures " ListInnerItem= "Help Center"/>
   
            <ListItem className=" text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures" ListInnerItem= "Payment Methods"/>
         
            <ListItem className="my-[13px] text-black font-['Montserrat'] text-lg font-normal leading-[160%] no-ligatures" ListInnerItem= "Return & Refund"/>
          </List>

        </div>
        
        <div>
          <h4 className='text-black font-["Montserrat"] text-[22px] !font-extrabold leading-[160%]  no-ligatures'>Contact</h4>
          <List className="font-['Montserrat'] text-lg font-normal" >
            <li className="my-[25px] items-center leading-[160%] ">
              <Link to="tel:(+1) 123-456-7890">
             <TelephoneIcon className=" inline-flex items-center mr-[10px]"/>(+1) 123-456-7890
              </Link>
            </li>
            <li className=" leading-[160%] items-center">
              <Link to="mailto:email@youremail.com">
              <EmailIcon className=" inline-flex items-center  mr-[10px]"/>email@youremail.com
              </Link>
            </li>
          </List>
        </div>
      </Container>
    </>
  )
}

export default Footer