import React from 'react'
import Container from '../layers/Container'

const Search = () => {
  return (
    <Container className="bg-[url('/images/searchbg.png')] w-full  bg-cover flex items-center justify-between">
        <div className='pt-[62px] pb-[81.1px] ml-[73px]'>
            <h5 className='text-[#fff] font-["Prompt"] text-[46px] w-[473px] font-bold leading-[120%] tracking-[-0.92px] '>Gateway to a world of innovation with</h5>
            <img className=" mt-[17px]" src="/images/spherelogosearchbar.png" alt="" />
        </div> 
        <div>Right</div> 
    </Container>
  )
}

export default Search