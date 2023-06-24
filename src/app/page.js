import Image from 'next/image';
import TopImage from './images/logo.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={TopImage} width={150} height={300} alt='leadster logo' />
    </main>
  );
}
