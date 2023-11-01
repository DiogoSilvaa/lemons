import { FC } from "react"
import { Button, Input, Typography } from "ui"

const Page: FC = () => {
  return (
    <div className='flex flex-col bg-slate-700 h-full  w-full items-center '>
      <Typography
        text='Welcome To Travel AI'
        size='extra-large'
        color='primary'
        className='my-60'
      />

      <div className='flex w-full items-center justify-center mt-8 gap-3'>
        <Input type='text' className='w-1/3' />

        <Button>
          <Typography text='Ask your question' size='medium' color='secondary' />
        </Button>
      </div>
    </div>
  )
}

export default Page
