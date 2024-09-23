import { SoMail, SoSupport, SoTranslate } from 'solom-icon'

const AuthPage = () => {
  return <div>Good Moring
    <SoMail className='text-red-500 text-2xl hover:text-indigo-600' />
    <SoSupport className='text-red-500 text-5xl' />
    <SoTranslate className='text-red-500 text-5xl' />
  </div>;
};

export default AuthPage;