import React from 'react'
import { 
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'




function Sidebar() {
  return (
    <div>
        <div>
        {/* <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span>Download</span>
        </button> */}
        <button>
                <HomeIcon className="h-5 w-5" />
                <p>Home</p>
        </button>
        <button>
                <MagnifyingGlassIcon className="h-5 w-5" />
                <p>Search</p>
        </button>
        <button>
                <BuildingLibraryIcon className="h-5 w-5" />
                <p>Your Library</p>
        </button>
        </div>
    </div>
  )
}

export default Sidebar