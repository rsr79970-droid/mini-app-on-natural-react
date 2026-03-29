import { useEffect, useState } from "react";
import type { IUser, UsersResponse } from "../types/user.types";
import { api } from "../api/api";
import { AxiosError } from "axios";

export function useFetchUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await api.get<UsersResponse>("/users");
      setUsers(data.data);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    isLoading,
    error,
    refetch: fetchUsers,
  };
}
