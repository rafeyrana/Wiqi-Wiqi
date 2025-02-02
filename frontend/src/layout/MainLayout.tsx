import LeftSideBar from '@/components/LeftSideBar/LeftSideBar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
const isMobile = false;
  return (
    <div className='flex flex-col h-screen bg-black text-white'>
        <ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">
            {/* left sidebar*/}
            <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}><LeftSideBar/></ResizablePanel>
            <ResizableHandle className=" m-1 w-1 bg-zinc-900 rounded-lg transition-colors"/> 
            {/* main content */}
            <ResizablePanel defaultSize={isMobile ? 80 : 60} >
                <Outlet></Outlet>
            </ResizablePanel>
            <ResizableHandle className=" m-1 w-1 bg-zinc-900 rounded-lg transition-colors"/>
            <ResizablePanel defaultSize={20} minSize={ 0} maxSize={25} collapsedSize={0}>Friends Activity component</ResizablePanel>
        </ResizablePanelGroup>

    </div>
  )
}

export default MainLayout