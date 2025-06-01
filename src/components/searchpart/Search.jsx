import React from 'react'
import Container from '../layers/Container'

const Search = () => {
  return (
    <Container className="bg-[url('/images/searchbg.png')] w-full  bg-cover flex items-center justify-between">
        <div className='pt-[62px] pb-[81.1px] ml-[73px]'>
            <h5 className='text-[#fff] font-["Prompt"] text-[46px] w-[473px] font-bold leading-[120%] tracking-[-0.92px] '>Gateway to a world of innovation with</h5>
            <img className=" mt-[17px]" src="/images/spherelogosearchbar.png" alt="" />
        </div>

        <div>
          <div className='mr-[51px]'>
            <input type="text" placeholder='Search for a product, category, or brand' className=' w-[591px] h-[60px] rounded-[30px] px-6 text-[16px] font-["Prompt"] font-normal bg-[#fff] border border-[#E0E0E0] focus:outline-none focus:border-[#000]' />
          </div>

        </div> 
    </Container>
  )
}

export default Search