import React from 'react'

const portfolio = [
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
    {image:'1',tittle:'Tittle',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pellentesque nibh adipiscing sed elementum, luctus risus nunc, elementum. Pretium at lacus risus morbi feugiat amet nisl, feugiat suspendisse.',tools:['nodejs','reactjs','tailwindcss']},
]

export default function Portfolio() {
  return (
    <section className='bg-primary'>
        <div className='mx-3 lg:max-w-2xl flex justify-center flex-wrap md:mx-auto lg:block'>
            <div className='text-2xl lg:text-4xl font-bold text-white py-4 lg:py-8'>
                <h1 className=' text-center'>Portfolio</h1>
                <h1 className=' text-center'>Showcase</h1>
            </div>
            <p className='pb-5 text-sm text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra mauris urna, volutpat sem scelerisque ornare quam. Diam justo, faucibus ut fames eget dignissim non erat. </p>

            <div className='md:grid md:grid-cols-2 lg:gap-4 md:justify-items-center'>
                {portfolio.map((value,index)=>(
                    <div className='mx-3 my-5 max-w-full rounded-lg bg-white p-2'>
                        <div className='w-full rounded-lg bg-primary h-40 mb-3'>
                        </div>
                        <div className='mx-1 text-primary'>
                            <h2 className='text-xl font-bold'>{value.tittle}</h2>
                            <p1 className='text-xs'>{value.description}</p1>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

    </section>
  )
}
