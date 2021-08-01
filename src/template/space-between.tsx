import React from 'react'

export interface SpaceBetweenProps {}

export const SpaceBetween: React.FunctionComponent<SpaceBetweenProps> = (props) => {
  1
  return (
    <div>
      <div className="p-10  flex items-center bg-indigo-500">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 bg-indigo-400 h-4 w-40 rounded"></div>
          <div className="flex items-center space-x-6 ">
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white text-red-500 rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
      <div className="p-10 flex items-center bg-indigo-500">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 bg-indigo-400 h-4 w-40 rounded"></div>
          <div className="flex items-center flex-row-reverse space-x-6 space-x-reverse">
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>

      <div className="p-10 flex items-center bg-indigo-500">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 bg-indigo-400 h-4 w-40 rounded"></div>
          <div className="flex items-center flex-col  space-y-6">
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>

      <div className="p-10 flex items-center bg-indigo-500">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 bg-indigo-400 h-4 w-40 rounded"></div>
          <div className="-m-3 flex items-center flex-wrap">
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className=" m-3 h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
