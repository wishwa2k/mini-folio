import React from 'react'
import Swal from 'sweetalert2'

const Contact = () => {


 
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      // Go to [https://web3forms.com/#start](https://web3forms.com/#start) and 
      // create an access key using your email. Then, replace the access 
      // key value in the code below with your generated key.
      // After that, you will receive every submitted 
      // messages in your email.
      formData.append("access_key", "f7d14d14-5055-457f-ab30-0e5a949dc3d2");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message sent successfully!",
          icon: "success"
        });
      }
    };

  return (
    <div id='contact'className='flex min-h-screen w-full flex-col
    items-center justify-center gap-16 p-8'>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl 
        lg:text-6xl font-light
        text-teal-600'>Get In Touch</h1>

        <form onSubmit={onSubmit} className='flex w-full max-w-md flex-col
        gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>

            <div className="flex flex-col gap-4">
                <input type="text" placeholder='Your Name'
                className='rounde-lg- border-2 border-teal-400
                px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-teal-50 focus:ring-2
                focus:ring-teal-500'name='firstName' required/>

                <input type="text" placeholder='Your Surname'
                className='rounde-lg- border-2 border-teal-400
                px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-teal-50 focus:ring-2
                focus:ring-teal-500'name='lastName' required/>

                <input type="text" placeholder='Your Email'
                className='rounde-lg- border-2 border-teal-400
                px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-teal-50 focus:ring-2
                focus:ring-teal-500' name='email' required/>


            </div>

            <textarea name='message' placeholder='Your Message' className='h-32 w-full
            resize-none rounded-lg border-2 border-teal-400
                px-4 py-3 text-lg outline-none transition-all
                duration-200 hover:bg-teal-50 focus:ring-2
                focus:ring-teal-500 '></textarea>

            <button className='rounded-lg border-2 *:border-teal-400
            bg-teal-500 px-6 py-3 font-semibold text-white
            transition-all duration-200 hover:bg-teal-600'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact