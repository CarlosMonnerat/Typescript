import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
   return (
      <Link href = "/">
         <div>
            <div>A Z</div>
            <IconBrandAmazon size ={40} stroke={1} className=""/>
         </div>
      </Link>
   )
};