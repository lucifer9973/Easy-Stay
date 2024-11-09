import Image from 'next/image';
import easystay from '@/assets/images/easystay.png';

const Logo = () => {
  return (
    <Image
      className='h-12 w-52'
      src={easystay}
      alt='easyStay'
      priority={true}
      width={200} 
      height={100} 
    />
  );
};

export default Logo;
