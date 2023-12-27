import React from 'react'
import Button from '../components/share/Button'

const ContactUs = () => {
    return (
        <form className='w-full'>
            <div className='bg-white p-4 rounded-md'>

                <h1 className='font-semibold text-xl mb-2 border-b-2 pb-2 border-gray-200'>تماس ما</h1>

                <p className='my-4'>
                    شما از طریق فرم زیر میتوانید با ما در تماس باشید
                </p>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                    <div>
                        <input required placeholder='نام شما' type="email" class="form-input w-full " />
                    </div>
                    <div>
                        <input required placeholder='ایمیل شما' type="email" class="form-input w-full" />
                    </div>
                    <div>
                        <input required placeholder='موضوع' type="text" class="form-input w-full" />
                    </div>
                </div>

                <textarea className="w-full mt-8" placeholder='پیام شما' name="" id="" cols="30" rows="10"></textarea>

                <div className="w-full my-4">
                    <Button className={'w-full block text-center'}>
                        ثبت
                    </Button>
                </div>

            </div>
        </form>
    )
}

export default ContactUs
