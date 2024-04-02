import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 bg-orange-100 pb-10 pt-15 text-black-2">
      <div className="flex w-[80%] justify-around">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-orange-400">
            icon
          </div>
          <h1>Have questions?</h1>
          <h1>Visit Our FAQs</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-orange-400">
            icon
          </div>
          <h1>Contact me</h1>
          <h1>playtotherapy@gmail.com</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-orange-400">
            icon
          </div>
          <h1>Have questions?</h1>
          <h1>Visit Facebook Page</h1>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-orange-400">
          icon
        </div>
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-orange-400">
          icon
        </div>
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-orange-400">
          icon
        </div>
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-orange-400">
          icon
        </div>
      </div>
      <div>© 2024 PLAYTO - Play Therapy - เล่นบำบัด. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
