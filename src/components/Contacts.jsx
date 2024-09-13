import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import Table from "react-bootstrap/Table";
import { getContact } from "../service/allApis";
import { toast } from "react-toastify";

function Contacts({ add }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, [add]);

  const fetchContacts = async () => {
    try {
      const res = await getContact();
      if (res.status === 200 && Array.isArray(res.data)) {
        setContacts(res.data);
      } else {
        toast.error("Error fetching contacts");
      }
    } catch (error) {
      toast.error("Error fetching contacts");
    }
  };

  return (
    <div className="border shadow p-4">
      {contacts?.length > 0 ? (
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((item) => (
              <ContactCard
                key={item.id}
                contact={item}
                refreshContacts={fetchContacts}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <h2 className="text-center">No Contact Available</h2>
      )}
    </div>
  );
}

export default Contacts;
