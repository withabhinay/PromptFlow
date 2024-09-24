import React from 'react'
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            PromptFlow is a platform for discovering and sharing AI-powered prompts. 
            We hope that our prompts will inspire you to write, create, and share your work with the world.
        </p>
        <Feed />
    </section>
  )
}

export default Home