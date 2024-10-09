// import { Github, Linkedin } from 'lucide-react'
// import React from 'react'

// const Developer = () => {
//     return (

// <div className='container'><h1 className='text-center my-10 '>
//     Meet The Developer
// </h1>
//     <div className='flex justify-center items-center mx-auto text-center  mt-5 w-[50%]'>
//         <div className='bg-[#E4E4E9]  p-5 bg-cover flex flex-col gap-3'>
//             <div className='flex justify-center'>
//                 <img src="images/beach.jpg" className='bg-cover w-20 rounded-full h-20' alt="" />
//             </div>
//             <h1 className=''>Mohammad Bilal G</h1>
//             <h3>Creator of Iconarium    </h3>
//             <h1>Software Engineer</h1>
//             <div className='flex justify-center gap-2'>
//                 <Github />
//                 <Linkedin />
//             </div>
//         </div>
//     </div></div>

//     )
// }

// export default Developer


import { Github, Linkedin } from 'lucide-react'
import React from 'react'

const Developer = () => {
    return (
        <><div className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-center mb-8">
                Meet The Developer
            </h2>
            <div className="max-w-md mx-auto bg-[#E4E4E9] rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 flex flex-col items-center">
                    <img
                        src="/images/beach.jpg"
                        className="w-24 h-24 rounded-full object-cover mb-4"
                        alt="Mohammad Bilal G" />
                    <h3 className="text-xl font-semibold mb-1">Mohammad Bilal G</h3>
                    <p className="text-gray-600 mb-2">Creator of Iconarium</p>
                    <p className="text-gray-800 mb-4">Software Engineer</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Developer