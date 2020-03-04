import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

function Users() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data.getUsers)
    return (
      <div>
        {data.getUsers.map(({ email, _id }, i) => {
          return (
            <div key={i}>
              {email} -> {_id}
            </div>
          );
        })}
      </div>
    );
}

export default Users;

const GET_USERS = gql`
  query {
    getUsers {
      email
      _id
    }
  }
`;
