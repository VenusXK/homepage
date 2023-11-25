import Image from 'next/image'

const certArr = [
    { order:1, title: 'test1', color: 'blue', icon_link: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/2211.05100.png'},
    { order: 2, title: 'test2', color: 'orange', icon_link: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/2211.05100.png'},
    { order: 2, title: 'test2', color: 'orange', icon_link: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/2211.05100.png'},
    { order: 2, title: 'test2', color: 'orange', icon_link: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/2211.05100.png'},

];
function HrefRender(){
    const hrefList = certArr.map(certItem => 
        <div key={certItem.order} className="w-42 m-2 h-32 grid-rows-1 border border-gray-400 rounded-xl overflow-hidden">
            <Image src={certItem.icon_link} width={100} height={100} alt='0' className="w-full h-full" quality={100}></Image>
        </div>
    );

    return (
      <>
          <div className=" flex h-20 w-full flex-col items-stretch rounded-t-[50%]  text-center 2xl:mb-32">
            <div className="mb-2 flex flex-none items-center justify-center gap-2 text-xl font-bold">
                <div className="mr-4 h-px flex-1 bg-gradient-to-l from-gray-100 to-white"></div>
                <h2 className="text-3xl font-bold 2xl:text-4xl">发表的文章</h2>
                <div className="ml-4 h-px flex-1 bg-gradient-to-r from-gray-100 to-white"></div>
            </div>
            <p className="flex-none text-lg text-gray-500 2xl:text-xl">
                My published-essay.
            </p>
          </div>

          <div className="max-w-xl m-auto grid grid-cols-3">
            {hrefList}  
          </div>
      </>
        
    );
}


export default function Paper() {
  return (
    <>
      <HrefRender />
    </>
  );
}
