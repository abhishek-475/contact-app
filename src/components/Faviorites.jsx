import React, { useEffect, useState } from "react";
import { getFavorites, toggleFavorite } from "../service/allApis";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Fetch the favorite contacts from the backend
  const fetchFavorites = async () => {
    try {
      const res = await getFavorites();
      if (res.status === 200) {
        setFavorites(res.data);
      } else {
        toast.error("Failed to load favorites");
      }
    } catch (error) {
      toast.error("An error occurred while fetching favorites");
    }
  };

  // Toggle favorite status for a contact
  const handleToggleFavorite = async (id) => {
    try {
      const res = await toggleFavorite(id);
      if (res.status === 201) {
        toast.success("Favorite status updated!");
        fetchFavorites(); // Refresh the favorites list
      } else {
        toast.error("Failed to update favorite status");
      }
    } catch (error) {
      toast.error("An error occurred while updating favorite status");
    }
  };

  return (
    <div className="border shadow p-4">
      {favorites.length > 0 ? (
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td className="btn">
                  <i
                    className="fa-solid fa-star"
                    style={{
                      color: contact.isFavorite ? "#FFD700" : "#d3d3d3",
                      cursor: "pointer",
                    }}
                    onClick={() => handleToggleFavorite(contact.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2 className="text-center">No Favorite Contacts Available</h2>
      )}
    </div>
  );
}

export default Favorites;
