"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import '../globals.css'
import Header from '@/components/Header';
import FirstCard from '@/components/firstCard';

export default function Home() {


  return (
    <><Header />
      <FirstCard />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:text-blue-400 ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to <a className="text-blue-600 dark:text-blue-400" href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className="mt-3 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-100 dark:bg-gray-800 rounded-md">
              pages/index.js
            </code>
          </p>


        </main>
      </div></>
  )
}
