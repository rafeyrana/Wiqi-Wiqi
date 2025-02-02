import { HomeIcon, Library, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils"; // Ensure cn is correctly imported
import { buttonVariants } from "@/components/ui/button"; // Import buttonVariants if it's a utility
import { SignedIn } from "@clerk/clerk-react";
import { ScrollArea } from "../ui/scroll-area";
import PlaylistSkeleton from "../PlaylistSkeleton/PlaylistSkeleton";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";

function LeftSideBar() {
  // data fetching logic -> zustand
  const { tracks, collections, isLoading, fetchCollections } = useMusicStore();
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="h-full flex flex-col gap-2">
      <div className="rounded-lg bg-zinc-900 p-2">
        <div className="space-y-2">
          <Link
            to={"/"}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-full justify-start text-white hover:bg-zinc-800"
            )}
          >
            <HomeIcon className="mr-2 size-5" />
            <span className="hidden md:inline">Home</span>
          </Link>

          <SignedIn>
            <Link
              to={"/chat"}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "w-full justify-start text-white hover:bg-zinc-800"
              )}
            >
              <MessageSquare className="mr-2 size-5" />
              <span className="hidden md:inline">Messages</span>
            </Link>
          </SignedIn>
        </div>
      </div>

      <div className="flex-1 rounded-lg bg-zinc-900 p-2">
        <div className="flex items-center justify-between mb-4">
          <div className=" flex items-center text-white px-2">
            <Library className="size-5 mr-2" />
            <span className="hidden md:inline"> Playlists</span>'
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
          <div className="space-y-2">
            {isLoading ? (
              <PlaylistSkeleton />
            ) : (
              collections?.length ? (
                collections.map((collection) => (
                  <Link key={collection._id} to={`/collections/${collection._id}`} className="group flex cursor-pointer items-center gap-3 rounded-md p-2 text-white hover:bg-zinc-800">
                    <img src={collection.imageUrl} alt="collection-image" className="size-12 flex-shrink-0 rounded-md object-cover" />
                    <div className="min-w-0 hidden md:block">
                      <p className="truncate font-medium">{collection.title}</p>
                      <p className="truncate text-sm text-zinc-400">Collection - {collection.dj}</p>
                    </div>
                  </Link>
                ))
              ) : <p className="text-white px-2">No collections found.</p>
              
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default LeftSideBar;
