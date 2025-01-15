import instagram from '@public/images/instagram.svg';
import twitter from '@public/images/twitter.svg';
import facebook from '@public/images/facebook.svg';
import youtube from '@public/images/youtube.svg';
import SocialButton from './SocialButton';

const FollowUs = () => {
  return (
    <div className="w-full py-4 md:min-w-1/3 md:w-fit md:py-0">
      <p className="text-sm pb-2">Follow us</p>
      <div className="flex gap-2">
        <SocialButton icon={instagram} alt="instagram" />
        <SocialButton icon={twitter} alt="twitter" />
        <SocialButton icon={facebook} alt="facebook" />
        <SocialButton icon={youtube} alt="youtube" />
      </div>
    </div>
  );
};

export default FollowUs;
