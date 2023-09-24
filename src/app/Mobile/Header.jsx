import React from 'react';

import Image from 'next/image';


export default function Header() {
    return (
        <main>
            <header className='flex  bg-white-800 text-black justify-between   '>
                <div className=' flex items-center'>

                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.11272 16.7067C8.27391 16.7067 7.59393 16.0267 7.59393 15.1879H10.6315C10.6315 16.0267 9.95152 16.7067 9.11272 16.7067ZM15.1879 14.4285H3.03757V12.9097L4.55635 12.1503V7.97364C4.55635 5.34462 5.63545 3.63979 7.59393 3.17428V1.5188H9.87211C9.37695 2.17487 9.11023 2.97503 9.11272 3.79698C9.11269 3.98787 9.1269 4.1785 9.15524 4.36728H9.11272C8.18615 4.30727 7.29245 4.72166 6.73961 5.46764C6.26692 6.21531 6.035 7.09 6.07514 7.97364V12.9097H12.1503V7.97364C12.1503 7.81341 12.145 7.65926 12.1343 7.51801C12.6366 7.62177 13.1547 7.62358 13.6577 7.52332C13.666 7.68356 13.6691 7.83619 13.6691 7.97896V12.1503L15.1879 12.9097V14.4285ZM12.9097 6.07516C12.4508 6.07571 12.0026 5.93725 11.624 5.678C10.7293 5.06637 10.3893 3.90907 10.8111 2.91069C11.2328 1.91232 12.2996 1.34929 13.3618 1.56439C14.4241 1.77949 15.1877 2.71317 15.1879 3.79698C15.1879 5.05518 14.1679 6.07516 12.9097 6.07516Z" fill="#343A40" />
                    </svg>

                    <Image src='/Mask Group.png' width={80}
                        height={73}
                        alt="Picture of the author" />
                    <option selected>Dijital Mentor</option>
                    {/* dijital mentoru yap */}
                    <h1>Merhaba Murat Bey,</h1>
                    <h2>Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana tıklayarak rapora erişim sağlayabiliriniz.</h2>
                </div>
            </header>
            <div>
                <h1>MOBILE COMBUSTION</h1>
                <Image src='/3 11.png' width={80}
                    height={73}
                    alt="Picture of the author" />
                <p>Scope 1</p>

            </div>

        </main >
    )
}