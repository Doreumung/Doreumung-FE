import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const SocialButton = ({ icon, alt }: { icon: StaticImport; alt: string }) => {
  return (
    <>
      <button className="flex justify-center items-center size-6 p-1 border border-darkerGray rounded-md bg-white">
        <Image src={icon} sizes="20" alt={alt} />
      </button>
    </>
  );
};

export default SocialButton;
