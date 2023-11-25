import Image from 'next/image'

const languageArr = [
    // {name: 'Android', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/Android_logo_2023_%28stacked%29.svg', sizeClass: 'w-32 pr-4'},
    // {name: 'NextJS', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/Nextjs-logo.svg', sizeClass: 'w-44'},
    // {name: 'React', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/reactjs-ar21.svg', sizeClass: 'w-44'},
    // {name: 'Kotlin', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/kotlinlang-ar21.svg', sizeClass: 'w-44'},
    // {name: 'Python', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/python-ar21.svg', sizeClass: 'w-44'},
    {name: 'Java', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/java-ar21.svg', sizeClass: 'w-44' },
    {name: 'C/C++', key: '4', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/The_C_and_C%2B%2B_programming_languages_wordart.svg', sizeClass: 'w-28'},
]

export default function language(){
    const languageList = languageArr.map(languageItem =>
        <Image src={languageItem.logo} width={100} height={100} key={languageItem.key} className={languageItem.sizeClass + ' inline m-2'} alt={languageItem.logo} ></Image>    
    )
    return (
        <div className='max-w-3xl m-auto'>

            <div className=" flex h-32 w-full flex-col items-stretch rounded-t-[50%] bg-gradient-to-b from-gray-100/60 via-white to-white  pt-12 text-center 2xl:mb-32">
                <div className="mb-2 flex flex-none items-center justify-center gap-2 text-xl font-bold">
                    <div className="mr-4 h-px flex-1 bg-gradient-to-l from-gray-100 to-white"></div>
                    <h2 className="text-3xl font-bold 2xl:text-4xl">我熟悉的编程技能</h2>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-gray-100 to-white"></div>
                </div>
                <p className="flex-none text-lg text-gray-500 2xl:text-xl">
                    The codeing skills that I am familiar with.
                </p>
            </div>


            <div className="m-auto text-center">
            {languageList}
            </div>


        </div>
        
        
    );
}
