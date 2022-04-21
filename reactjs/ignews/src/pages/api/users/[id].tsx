/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  
  const users = [
    { id: 1, name: 'John' },
    { id: 1, name: 'Maria' },
    { id: 1, name: 'Juliana' },
  ];

  return response.json(users);
}