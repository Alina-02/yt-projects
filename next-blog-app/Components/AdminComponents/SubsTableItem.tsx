import React from "react";

interface Props {
  email: string;
  mongoId: number;
  date: number;
  deleteEmail: (mongoId: number) => Promise<void>;
}

const SubsTableItem = (props: Props) => {
  const { email, mongoId, date, deleteEmail } = props;

  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td
        onClick={() => deleteEmail(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        x
      </td>
    </tr>
  );
};

export default SubsTableItem;
