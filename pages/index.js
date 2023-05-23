export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/bg-home.png')] bg-cover flex justify-center items-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563eba3] to-[#1e3a8ae6] "></div>
   <div className="container flex justify-center items-center flex-col z-20">
     
   <h1 className="text-[#fff] text-[30px] font-semibold text-center w-[782px] break-words">
        Eight Plus provides a wide range of services that cater to different
        customer needs. in the field of marketing
      </h1>
      <p className="text-[14px] font-medium text-[#fff] text-center w-[580px] break-words">
        Eight Plus relies on a professional team of developers, designers and
        marketers who are skilled and experienced in their fields. The team
        works closely with clients to understand their needs and provide
        innovative and effective solutions that meet their goals
      </p>
   </div>
    </div>
  );
}
