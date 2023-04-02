import { motion } from 'framer-motion'
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

export default function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.open(`mailto:aaa@aaa.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`)
  }

  return (
    <motion.div className='relative h-screen max-w-6xl flex flex-col items-center justify-center
      px-10 mx-auto text-center md:text-left'>
      <h2 className='section-heading'>Contact</h2>

      <div className='flex flex-col space-y-5 pt-9'>
        <h3 className='text-3xl font-semibold'>
          I have a got just what you need. Lets Talk.
        </h3>

        <div className='flex flex-col space-y-2'>
          <div className='flex items-center justify-center space-x-5'>
            <FaPhoneAlt color='#f7ab0a' />
            <p>+1234567890</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MdEmail color='#f7ab0a' />
            <p>aaa@aaa.com</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <FaMapMarkerAlt color='#f7ab0a' />
            <p>123 Developer Lane</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} type='text' placeholder='Name' className='contact-input' />
            <input {...register('email')} type='text' placeholder='Email' className='contact-input' />
          </div>
          <input {...register('subject')} placeholder='Subject' type='text' className='contact-input' />
          <textarea {...register('message')} placeholder='Message' className='contact-input' />
          <button className='py-4 px-8 rounded-sm bg-[#f7ab0a] text-[#242424] text-lg font-semibold hover:opacity-70 transition-opacity'>
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}