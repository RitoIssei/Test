import { create } from 'zustand';
import axios, { ApiResponse } from '@/lib/axios-config';
import { createUrl } from '@/lib/utils';
import { ILoginData, IUser } from '@/types/user';
import { addItemToState, removeItemFromState } from '@/lib/state';

interface UserStore {
  user?: IUser;
  getUser: (id: string) => Promise<ApiResponse<IUser> | undefined>;
  register: (body: IUser) => Promise<ApiResponse<ILoginData>>;
}

const useUserStore = create<UserStore>((set) => ({
  user: undefined,

  getUser: async (id) => {
    try {
      const response = await axios.get<ApiResponse<IUser>>(
        createUrl(['users', id]),
      );
      const userData: IUser = response.data.data;

      set({ user: userData });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (body) => {
    try {
      const response = await axios.get<ApiResponse<IUser>>(
        createUrl(['users', 'register']),
      );
      const userData: IUser = response.data.data;

      set({ user: userData });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

}));

export default useUserStore;
