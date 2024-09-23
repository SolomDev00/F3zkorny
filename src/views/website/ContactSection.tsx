import Input from '../../components/schema/Input';
import ContactImg from '../../assets/contact-us.svg'
import Textarea from '../../components/schema/Textarea';
import Button from '../../components/schema/Button';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="mt-20 h-auto pb-5">
        <div className="flex flex-col justify-between items-center gap-10 container max-sm:flex-col max-sm:space-x-0">
          <div className="flex flex-col justify-between items-center space-y-3">
            <h2 className="bg-liner text-white py-2 px-4 text-2xl max-sm:text-lg font-semibold italic rounded-tl-xl rounded-br-xl">
              Contact Us
            </h2>
          </div>
          <div className='w-full flex flex-row items-center justify-between gap-16 max-sm:flex-col-reverse'>
            <form className='w-full flex flex-col items-start justify-between space-y-2'>
              <div className="w-full flex flex-col gap-1">
                <label className='text-sm text-primary font-medium' htmlFor="fullname">Full Name</label>
                <Input id='fullname' type='name' aria-describedby="username-help" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className='text-sm text-primary font-medium' htmlFor="phone">Phone No.</label>
                <Input id='phone' type='number' aria-describedby="phone-help" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className='text-sm text-primary font-medium' htmlFor="email">Email Address</label>
                <Input id='email' type='email' aria-describedby="email-help" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className='text-sm text-primary font-medium' htmlFor="msg">Message</label>
                <Textarea id='msg' aria-describedby="message-help" />
              </div>
              <Button fullWidth>Submit</Button>
            </form>
            <div className='flex-shrink-0 w-1/2 max-sm:mt-10 max-sm:w-10/12'>
              <img className="duration-300" src={ContactImg} alt="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
