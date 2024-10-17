import React, { useEffect } from "react";
import { getBrands } from "../../store/slices/user.slice";
import { useSelector } from "../../store";
import { RootState } from "../../store";
import { useDispatch } from "../../store/index"; // Update the path to your store file

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getBrands());
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      {/* Display error if present */}
      {users.map((item: any) => (
        <div key={item.id}>{item.name}</div> // Key prop added here
      ))}
    </div>
  );
};

export default Home;
