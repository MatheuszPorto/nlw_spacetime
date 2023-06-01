import Image from 'next/image';

import  nlwLogo  from '../assets/nlw-spacetime-logo.svg';

export function Hero() {
  return (
    <div className="space-y-5">
    <Image src={nlwLogo} alt="NLW Spacetime" />

  <div className='max-w-[420px] space-y-1'>
    <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua cápsula do tempo</h1>
    <p className='text-lg leading-relaxed'>
      Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
    </p>
  </div>

    <a href="" className='inline-block rounded-full py-3 px-5 bg-green-500 text-black font-bold font-alt text-sm leading-none hover:bg-green-600 transition-colors'>CADASTRAR LEMBRANÇA</a>
  </div>
  )
}