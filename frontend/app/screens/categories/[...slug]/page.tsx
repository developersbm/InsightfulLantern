'use client';
import Navbar from "@/app/components/Navbar";
import SpawnLanterns from "@/app/components/SpawnLanterns";
import PostButton from "@/app/components/PostButton";
import Image from "next/image";
import TitleCategory from "@/app/components/titleCategory";
//Page
export default function Page({ params }: { params: { slug: string } }) {
 const categories = [
  "Coding",
  "General",
  "Health",
  "Relationship",
  "Work",
  "School",
  "Family",
 ];
 return (
  <div>
   <Navbar />
   {/* My Post: {categories[parseInt(params.slug)]} */}
   <PostButton />
   <a
    href={`/screens/categories/${parseInt(params.slug)}`}
    className="absolute bottom-10 left-10 lantern-btn"
   >
    <Image
     src="/icons/RefreshIcon.svg"
     width={40}
     height={40}
     alt="Refresh Icon"
    />

    <TitleCategory category={categories[parseInt(params.slug)]} />

   </a>
   <SpawnLanterns category={categories[parseInt(params.slug)]} />
  </div>
 );
}
