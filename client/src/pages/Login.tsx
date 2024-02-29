import Eye from '../assets/eye.png'
import Phone from '../assets/Phone.svg'

export default function Login() {
    return (
        <>
            <main className='flex h-svh items-center justify-between bg-FAST-DarkBlue px-2 py-6 sm:px-8 sm:py-10'>
                {/* Phone Container */}
                <div className='hidden md:flex md:h-4/5 md:w-1/2 md:items-center md:justify-center'>
                    <img className='h-fit max-h-[600px]' src={Phone} alt='Phone' />
                </div>
                {/* Login Container */}
                <div className='flex size-full items-center justify-center md:w-1/2'>
                    <form
                        className='flex size-full flex-col items-center justify-around rounded-3xl bg-FAST-WhiteCream p-6 text-left'
                        action=''
                    >
                        <h1 className='text-4xl font-bold sm:text-5xl'>HELLO LUSWI</h1>
                        <div className='flex w-full flex-col'>
                            <h2 className='text-left uppercase'>EMAIL</h2>
                            <input
                                className='h-[60px] w-full rounded-lg bg-[#A0A5BA]/20 p-4'
                                type='email'
                                name=''
                                id=''
                                placeholder='ejemplo@gmail.com'
                            />
                            <h2 className='mt-3 text-left uppercase'>CONTRASEñA</h2>
                            <div className='relative flex h-[60px] justify-items-end rounded-lg bg-[#A0A5BA]/20	'>
                                <input
                                    className='absolute size-full rounded-lg bg-[#A0A5BA]/[0] p-4'
                                    type='password'
                                    name=''
                                    id=''
                                    placeholder='* * * * * * * * * * * * '
                                />
                                <button className='absolute right-4 top-[11px]'>
                                    <img src={Eye} alt='Show Password' />
                                </button>
                            </div>
                            <a href='/resetPassword' className='right-0 text-right text-FAST-Orange hover:underline'>
                                Olvide mi contraseña
                            </a>
                        </div>
                        <button className='h-[80px] w-full rounded-lg bg-FAST-Orange font-bold uppercase text-[#FFFFFF] hover:border-2' disabled type='submit'>ENTRAR</button>
                        <p className='text-base text-[#646982]'>No tienes cuenta?</p>
                        <a href='/register' className='font-bold uppercase text-FAST-Orange hover:underline'>REGISTRARME</a>
                    </form>
                </div>
            </main>
        </>
    )
}
