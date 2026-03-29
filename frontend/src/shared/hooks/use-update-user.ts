import type { AxiosError } from "axios";
import { useState } from "react";
import type { IUser } from "../types/user.types";
import { api } from "../api/api";

type UpdateUserDto = {
  name?: {
    firstname: string;
    lastname: string;
  };
  email?: string;
  phone?: string;
  username?: string;
  password?: string;
};

export function useUpdateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  async function updateUser(
    id: string,
    dto: UpdateUserDto,
  ): Promise<IUser | null> {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await api.patch<IUser>(`/users/${id}`, dto);
      return data;
    } catch (err) {
      setError(err as AxiosError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { updateUser, isLoading, error };
}
