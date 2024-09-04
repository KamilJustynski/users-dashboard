// UserComponent.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, selectLoading, selectError } from "../slices/UserReducer";
import { RootState } from "../store";
import { fetchUsersRequest } from "../slices/UserReducer";
export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => selectData(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>User Details</h2>
          <p>Name: {data[0].name}</p>
          <p>Email: {data[0].email}</p>
        </div>
      )}
    </div>
  );
};
