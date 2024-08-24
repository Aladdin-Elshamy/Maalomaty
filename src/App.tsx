import { Toaster } from 'react-hot-toast'
import Heading from './components/Heading'
import Input from './components/Input'
import './index.css'
import { useState } from 'react'
import { IdentityDetails } from './interfaces'
import InfoCard from './components/InfoCard'


function App() {
  const [idDetails, setIdDetails] = useState<IdentityDetails>({
    DateOfBirth: "",
    Governorate: "",
    Gender: "",
  })
  function getId(idCardDetails: IdentityDetails) {
    setIdDetails(idCardDetails)
  }
  return (
    <>
      <main className='p-4 pb-0 sm:p-8 sm:pb-0'>
        <div className='container bg-white rounded-t-3xl shadow-lg min-h-[90vh]'>
          <img src='./images/Group.svg' alt='logo' className='block pt-9 mb-12 pl-2 sm:mb-4 mr-auto' />
          <Heading />
          <div className='mx-auto w-full max-w-3xl mt-10'>
            <Input setIdToParent={getId} />
          </div>
          {Object.values(idDetails).some((value) => value !== "") === true ? (
            
            <div className='mt-20 pb-14 grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 grid-flow-row'>
              <div className='h-52 flex justify-center items-center text-white font-bold text-3xl rounded-xl text-center' style={{background: `linear-gradient(281.72deg, #3266E3 4.47%, #54B5A6 88.87%)`}}>
                <p>قدرنا نعرف <br /> الأتي</p>
              </div>
              <InfoCard type='النوع' info={idDetails.Gender} image='./images/gender.svg' />
              <InfoCard type='محل الإقامة' info={idDetails.Governorate} image='./images/location.svg' />
              <InfoCard type='تاريخ الميلاد' info={idDetails.DateOfBirth} image='./images/birth.svg' />
            </div>
          ) : (
            <div className='mt-1 pb-8'>
              <p className='text-sm text-[#406385] text-center'>دخل رقمك القومي و في لحظات هيتم عرض بيناتك</p>
              <img src='./images/waiting-img.jpg' className='block max-h-52 sm:max-h-64 md:max-h-72  lg:max-h-96 lg:mt-4 w-auto object-cover mx-auto' />
            </div>
          )}
        </div>
      </main>
      <footer className='p-4 pt-0 sm:p-8 sm:pt-0'>
        <div className='container py-5 bg-[#D3E2F2] rounded-b-3xl'>
          <p className='text-[#5982AB] text-center'> تقدر تبعتلنا على الإيميل بتاعنا: <span className='underline text-[#406385]'>aladdinelshamy@gmail.com</span></p>  
        </div>
      </footer>
      <Toaster />
    </>

    
  )
}

export default App
