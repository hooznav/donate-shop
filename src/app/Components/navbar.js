import React from "react";
import { Fragment, useState } from 'react'
import {} from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Navbar({ cart }) {

  const history = useRouter();

  const handleClick = () => {
    history.push('/cart', { cart: 'hvhg' });
  };
  
  const handleOnCart = ()=>{
    console.log("This is my cart",cart)
  }

  

  console.log("This is my cart",cart)
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Shop OR Donate!
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/donate.js"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Shop Products
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Request returns
            </a>
            <Link
              href="/donate"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Donate
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Customized Products
            </a>
            <Link
              href={{
                pathname: "/cart",
                query: {cart : JSON.stringify(cart)},
              }}
              //onClick={handleClick}
              className="inline-block text-sm px-4 py-2 leading-none "
            >
              <div style={{ height: "30px" }}>
                <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {cart.reduce((previousValue, currentValue) => {
                        return previousValue + currentValue.quantity;
                      }, 0)}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      onClick={() => {
                        return (    
                        <Transition.Root show={open} as={Fragment}>
                          <Dialog as="div" className="relative z-10" onClose={setOpen}>
                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>
                    
                            <div className="fixed inset-0 overflow-hidden">
                              <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                  <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                  >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                          <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">
                                              Shopping cart
                                            </Dialog.Title>
                                            <div className="ml-3 flex h-7 items-center">
                                              <button
                                                type="button"
                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                onClick={() => setOpen(false)}
                                              >
                                                <span className="absolute -inset-0.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                              </button>
                                            </div>
                                          </div>
                    
                                          {/* <div className="mt-8">
                                            <div className="flow-root">
                                              <ul
                                                role="list"
                                                className="-my-6 divide-y divide-gray-200"
                                              >
                                                {products.map((product) => (
                                                  <li key={product.id} className="flex py-6">
                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                      <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-full w-full object-cover object-center"
                                                      />
                                                    </div>
                                                    <div className="ml-4 flex flex-1 flex-col">
                                                      <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                          <h3>
                                                            <a href={product.href}>
                                                              {product.name}
                                                            </a>
                                                          </h3>
                                                          <p className="ml-4">{product.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">
                                                          {product.color}
                                                        </p>
                                                      </div>
                                                      <div className="flex flex-1 items-end justify-between text-sm">
                                                        <p className="text-gray-500">
                                                          Qty {product.quantity}
                                                        </p>
                    
                                                        <div className="flex">
                                                          <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                          >
                                                            Remove
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          </div> */}
                                        </div>
                    
                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                          <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>{cart.reduce((previousValue, currentValue) => {
                                            return previousValue + currentValue.quantity * currentValue.price;
                                          }, 0)}</p>
                                          </div>
                                          <p className="mt-0.5 text-sm text-gray-500">
                                            Shipping and taxes calculated at checkout.
                                          </p>
                                          <div className="mt-6">
                                            <a
                                              href="#"
                                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                              Checkout
                                            </a>
                                          </div>
                                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                              or
                                              <button
                                                type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={() => setOpen(false)}
                                              >
                                                Continue Shopping
                                                <span aria-hidden="true"> &rarr;</span>
                                              </button>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </Dialog.Panel>
                                  </Transition.Child>
                                </div>
                              </div>
                            </div>
                          </Dialog>
                        </Transition.Root>)
                      }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
