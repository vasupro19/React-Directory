import React, { useEffect, useState } from "react";
import api from "../../utils/axios";

// Define the structure of a user object
interface User {
  id: number;
  name: string;
}

export const getUsers = async (): Promise<any> => {
  try {
    const res = await api.get("/auth/users"); // API response contains a `users` array of type `User[]`
    return res.data.data;
  } catch (err) {
    throw err;
  }
};
