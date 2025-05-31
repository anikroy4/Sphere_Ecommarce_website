
import Container from '../../layers/Container'
import List from '../../layers/List'
import ListItem from '../../layers/ListItem'
import { FaArrowRight } from 'react-icons/fa'

const Header = () => {
  return (
    <Container className="  flex items-center justify-between mt-[51px] mb-[50px] ">
      <div className=' flex items-center justify-center'>
        <img src="/images/headinglogo.png" alt="headinglogo" />
      </div>
      <div className='py-4'>
        <List  className="flex items-cenend  text-[13px] text-[#8E8E8E] font-['Montserrat'] font-semibold leading-[130%] uppercase tracking-[1.3px] justify-between space-x-[57px] ">
          <ListItem className="" ListInnerItem="Home" href="/" />
          <ListItem className="" ListInnerItem="Pricing" href="/pricing" />
          <ListItem className="" ListInnerItem="Events" href="/events" />
          <ListItem className="" ListInnerItem="Company" href="/company" />  
        </List>
      </div>

      <div className='flex items-center uppercase text-[13px]  font-["Montserrat"] font-semibold leading-[130%] tracking-[1.3px] gap-x-6'>
        <button className="bg-transparent text-[#8E8E8E] px-4 py-4  hover:bg-[#000] hover:text-[#FFF] transition duration-300 ">
          Login
        </button>
        <button className=" flex gap-x-[10px] bg-transparent  border-blue-500 text-[#8E8E8E] px-[37px] py-4 rounded-full hover:bg-[#000] hover:text-white transition duration-300 capitalize">
          Sign Up now <FaArrowRight className='ml-[10px]'  />
        </button>
      </div>

    </Container>
  )
}

export default Header