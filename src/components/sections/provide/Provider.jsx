import React from 'react'
import Container from '../../layers/Container'

const Provider = () => {
  return (
    <>
    <Container className='relative bg-[#F5F5F5] pt-[105px]
     overflow-hidden mb-[106px]'>
        <div className='absolute top-[62px] left-[0px] w-full h-full z-[100]'>
            <img src="/images/additionalbannerimage.png" alt="additionalbannerimage" />
        </div>
        <div className=' text-center '>
          <h1 className='text-[#000] font-["Prompt"] text-[74px] font-extrabold leading-[125%] tracking-[-1.48px]   '>What <span className='text-[#5E1EE5]'>we</span> provide?</h1>
        </div>

        <div className='flex text-lg font-["Montserrat"]  text-center mt-[51px]  gap-x-17'>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/computericon.png" alt="computericon.png" />
            <h4 className=''>Computer & Laptop</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/mobileicon.png" alt="mobileicon.png" />
            <h4>Mobile & Phone</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/cameraicon.png" alt="cameraicon.png" />
            <h4>Camera</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/boxicon.png" alt="computericon.png" />
            <h4>TV & Smart Box</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/appliance.png" alt="computericon.png" />
            <h4>Home Appliance</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/accessories.png" alt="computericon.png" />
            <h4>Accessories</h4>
          </div>
          <div className='flex flex-col items-center w-[118px]'>
            <img className='pb-[47px] pt-[22px]' src="/images/serviceicon/other.png" alt="computericon.png" />
            <h4>Other Categories</h4>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Provider