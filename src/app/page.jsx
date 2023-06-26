import Image from 'next/image';
import TopImage from './images/logo.png'
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center	p-6">
        <Image src={TopImage} width={150} height={300} alt='leadster logo' />
      </div>
      <Header />
    </main>
  );
}
