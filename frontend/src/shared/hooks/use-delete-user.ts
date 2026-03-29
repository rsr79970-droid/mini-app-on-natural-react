import type { AxiosError } from "axios";
import { useState } from "react";
import { api } from "../api/api";

export function useDeleteUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const deleteUser = async (id: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);

      await api.delete(`/users/${id}`);
      return true;
    } catch (err) {
      setError(err as AxiosError);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteUser, isLoading, error };
}
