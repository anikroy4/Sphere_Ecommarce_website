import React from 'react'
import Container from '../layers/Container'
import SearchIcon from '../../icons/SearchIcon'

const Search = () => {
  return (
    <Container className="bg-[url('/images/searchbg.png')] w-full  bg-cover flex items-center justify-between">
        <div className='pt-[62px] pb-[81.1px] ml-[73px]'>
            <h5 className='text-[#fff] font-["Prompt"] text-[46px] w-[473px] font-bold leading-[120%] tracking-[-0.92px] '>Gateway to a world of innovation with</h5>
            <img className=" mt-[17px]" src="/images/spherelogosearchbar.png" alt="" />
        </div>

        <div className=' mx-auto w-[591px]  rounded-[30px]  bg-[#fff]' >
          <div className='relative px-[23px]'>
            <SearchIcon className='absolute left-[35px] w-[20px] top-[40%] translate-y-[-
1/2] z-10' />
            <input type="text" placeholder='Search for electronic' className='text-[#01081A] w-[95%] text-[21px] font-["Montserra"] font-light   outline-none ml-[40px] mt-[34px] mb-[25px]'/>
            
          </div>
          <button className='py-[13px] px-[243px] mb-[11px] font-["Montserrat"] text-[#000] font-normal text-[17px] bg-[#ACE238] rounded-[14px] ml-[23px]' > Search</button>
        </div> 
    </Container>
  )
}

export default Search