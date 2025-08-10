import { assets } from "@/Assets/assets";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  authorImg: string | StaticImageData;
  title: string;
  author: string;
  mongoId: number | undefined;
  date: number | undefined;
  deleteBlog: (mongoId: number) => Promise<void>;
}

const BlogTableItem = (props: Props) => {
  const { authorImg, title, author, date, deleteBlog, mongoId } = props;
  const BlogDate = new Date(date as number);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
          alt=""
        />
        <p>{author ? author : "No author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">
        {BlogDate ? BlogDate.toDateString() : "no date"}
      </td>
      <td
        onClick={() => deleteBlog(mongoId as number)}
        className="px-6 py-4 cursor-pointer"
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
