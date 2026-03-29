import type { AxiosError } from "axios";
import { useState } from "react";
import type { IUser } from "../types/user.types";
import { api } from "../api/api";

type CreateUserDto = {
  name: {
    firstname: string;
    lastname: string;
  };
  username: string; // 👈 ОБЯЗАТЕЛЬНО
  email: string;
  password: string;
  phone: string;
};

export function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  async function createUser(dto: CreateUserDto) {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await api.post<IUser>("/users", dto);
      return data;
    } catch (err) {
      setError(err as AxiosError);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { createUser, isLoading, error };
}
